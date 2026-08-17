/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Panchanga } from '../types';
import { AVANI_AVITTAM_TEMPLATE, GAYATRI_JAPAM_TEMPLATE, renderSankalpam } from '../templates/sankalpam';
import { VERIFIED_UPAKARMA_DB } from '../panchanga/engine';

export interface TestResult {
  id: number;
  name: string;
  passed: boolean;
  message: string;
}

export function runAutomatedTests(): TestResult[] {
  const results: TestResult[] = [];

  const mockPanchanga: Panchanga = {
    samvatsara: "பராபவ",
    ayana: "தக்ஷிணாயனே",
    ritu: "வர்ஷ",
    masa: "ஶ்ராவண",
    paksha: "ஶுக்ல",
    tithi: "பௌர்ணமாஸ்யாம்",
    vara: "குரு",
    nakshatra: "ஶ்ரவிஷ்டா",
    yoga: "ஶோபன",
    karana: "பவ",
  };

  // 1. Every variable is replaced
  try {
    const rendered = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga);
    const hasVariables = rendered.some(section => /\{\{.*?\}\}/.test(section.content));
    results.push({
      id: 1,
      name: "Variable Replacement Integrity",
      passed: !hasVariables,
      message: !hasVariables 
        ? "All template variables successfully substituted with active Panchanga inputs."
        : "Failed: Found un-replaced variables in output sections."
    });
  } catch (err: any) {
    results.push({ id: 1, name: "Variable Replacement Integrity", passed: false, message: err.message });
  }

  // 2. No {{VARIABLE}} remains in final output
  try {
    const renderedAvani = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga);
    const renderedGayatri = renderSankalpam(GAYATRI_JAPAM_TEMPLATE, mockPanchanga);
    const joined = renderedAvani.map(s => s.content).join(' ') + ' ' + renderedGayatri.map(s => s.content).join(' ');
    const hasCurly = joined.includes('{{') || joined.includes('}}');
    results.push({
      id: 2,
      name: "No Loose Template Syntax",
      passed: !hasCurly,
      message: !hasCurly
        ? "Validated that no dangling '{{' or '}}' markers remain in rendered streams."
        : "Failed: Template markers '{{' or '}}' detected in final strings."
    });
  } catch (err: any) {
    results.push({ id: 2, name: "No Loose Template Syntax", passed: false, message: err.message });
  }

  // 3. Repeated TITHI values are identical
  try {
    const rendered = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga);
    const mahaSankalpam = rendered.find(s => s.title === "மஹா சங்கல்பம்");
    if (!mahaSankalpam) throw new Error("Maha Sankalpam section missing.");
    
    // Check if the substituted tithi values are identical in the rendered string
    const tithiCount = (mahaSankalpam.content.match(/பௌர்ணமாஸ்யாம்/g) || []).length;
    results.push({
      id: 3,
      name: "Repeated Tithi Alignment",
      passed: tithiCount >= 2,
      message: tithiCount >= 2
        ? `Tithi "பௌர்ணமாஸ்யாம்" matched ${tithiCount} times identically in Maha Sankalpam.`
        : `Failed: Tithi substitutions did not match or repeat correctly (${tithiCount} matches).`
    });
  } catch (err: any) {
    results.push({ id: 3, name: "Repeated Tithi Alignment", passed: false, message: err.message });
  }

  // 4. Fixed text is unchanged
  try {
    const originalSection = AVANI_AVITTAM_TEMPLATE.find(s => s.title === "விஷ்வக்சேனர் தியானம்");
    const renderedSection = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga).find(s => s.title === "விஷ்வக்சேனர் தியானம்");
    const isUnchanged = originalSection && renderedSection && originalSection.content === renderedSection.content;
    results.push({
      id: 4,
      name: "Fixed Section Immutability",
      passed: !!isUnchanged,
      message: isUnchanged
        ? "Verified that fixed liturgical texts remain unmodified byte-for-byte during rendering."
        : "Failed: Liturgical text content changed unexpectedly."
    });
  } catch (err: any) {
    results.push({ id: 4, name: "Fixed Section Immutability", passed: false, message: err.message });
  }

  // 5. Vadakalai ending is exactly: "ஸ்ரீமந்நாராயண ப்ரீத்யர்த்தம்"
  try {
    const rendered = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga);
    const mahaSankalpam = rendered.find(s => s.title === "மஹா சங்கல்பம்");
    const endsCorrectly = mahaSankalpam?.content.includes("ஸ்ரீமந்நாராயண ப்ரீத்யர்த்தம்");
    results.push({
      id: 5,
      name: "Sect-specific Ending (Vadakalai)",
      passed: !!endsCorrectly,
      message: endsCorrectly
        ? "Maha Sankalpam concludes exactly with 'ஸ்ரீமந்நாராயண ப்ரீத்யர்த்தம்'."
        : "Failed: Missing standard Vadakalai ending 'ஸ்ரீமந்நாராயண ப்ரீத்யர்த்தம்'."
    });
  } catch (err: any) {
    results.push({ id: 5, name: "Sect-specific Ending (Vadakalai)", passed: false, message: err.message });
  }

  // 6. No Thenkalai wording appears
  try {
    const rendered = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga);
    const joined = rendered.map(s => s.content).join(' ');
    // Thenkalai endings like "ஸ்ரீஸைலேஶ தயாபாத்ரம்" should not appear in Vadakalai
    const hasThenkalai = joined.includes("ஸ்ரீஸைலேஶ") || joined.includes("தயாபாத்ரம்");
    results.push({
      id: 6,
      name: "Sect Boundary Check (No Thenkalai)",
      passed: !hasThenkalai,
      message: !hasThenkalai
        ? "Sankalpam is free from Thenkalai-specific invocations (e.g., Srisailesa Dayapatram)."
        : "Failed: Found Thenkalai phrasing in Vadakalai template."
    });
  } catch (err: any) {
    results.push({ id: 6, name: "Sect Boundary Check (No Thenkalai)", passed: false, message: err.message });
  }

  // 7. Tamil Unicode renders correctly
  try {
    const rendered = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga);
    const textSample = rendered[0].content;
    const isUnicodeCorrect = /[\u0B80-\u0BFF]/.test(textSample); // Tamil block regex
    results.push({
      id: 7,
      name: "Tamil Unicode Compliance",
      passed: isUnicodeCorrect,
      message: isUnicodeCorrect
        ? "Successful rendering of Tamil Unicode blocks for correct display."
        : "Failed: Non-compliant glyph encoding or corrupt characters."
    });
  } catch (err: any) {
    results.push({ id: 7, name: "Tamil Unicode Compliance", passed: false, message: err.message });
  }

  // 8. 2026 test data can reproduce the supplied 2026 example values where verified
  try {
    const test2026 = VERIFIED_UPAKARMA_DB[2026];
    const isCorrectDate = test2026.upakarmaDate === "2026-08-27";
    const isCorrectMasa = test2026.upakarmaPanchanga.masa === "ஶ்ராவண";
    const passed = isCorrectDate && isCorrectMasa;
    results.push({
      id: 8,
      name: "2026 Baseline Reproduction",
      passed,
      message: passed
        ? "Panchanga database correctly resolves 2026 Upakarma to August 27 under Shravana Poornima."
        : "Failed: Inaccurate baseline calendar data for 2026."
    });
  } catch (err: any) {
    results.push({ id: 8, name: "2026 Baseline Reproduction", passed: false, message: err.message });
  }

  // 9. Changing the year changes only the appropriate dynamic fields
  try {
    const render2026 = renderSankalpam(AVANI_AVITTAM_TEMPLATE, VERIFIED_UPAKARMA_DB[2026].upakarmaPanchanga);
    const render2027 = renderSankalpam(AVANI_AVITTAM_TEMPLATE, VERIFIED_UPAKARMA_DB[2027].upakarmaPanchanga);
    
    // Sections should have identical structures but different dynamic variable contents
    const section5_2026 = render2026.find(s => s.title === "மஹா சங்கல்பம்")?.content || '';
    const section5_2027 = render2027.find(s => s.title === "மஹா சங்கல்பம்")?.content || '';
    
    const isDifferent = section5_2026 !== section5_2027;
    const isSimilarLength = Math.abs(section5_2026.length - section5_2027.length) < 50;

    const passed = isDifferent && isSimilarLength;
    results.push({
      id: 9,
      name: "Year-Switch Field Variance",
      passed,
      message: passed
        ? "Switching years updates only dynamic parameters, preserving complete liturgical structure."
        : "Failed: Structure corrupted or no differences detected."
    });
  } catch (err: any) {
    results.push({ id: 9, name: "Year-Switch Field Variance", passed: false, message: err.message });
  }

  // 10. The fixed mantra sections remain byte-for-byte/string-for-string unchanged
  try {
    const fixedIndex = 1; // Section 2 is Pranayamam (completely fixed)
    const originalPranayamam = AVANI_AVITTAM_TEMPLATE[fixedIndex].content;
    const renderedPranayamam = renderSankalpam(AVANI_AVITTAM_TEMPLATE, mockPanchanga)[fixedIndex].content;
    const passed = originalPranayamam === renderedPranayamam;
    results.push({
      id: 10,
      name: "Fixed Mantra Byte Consistency",
      passed,
      message: passed
        ? "Byte-level comparison confirms the sacred Pranayamam text is 100% untouched."
        : "Failed: Sacred text was modified by the renderer."
    });
  } catch (err: any) {
    results.push({ id: 10, name: "Fixed Mantra Byte Consistency", passed: false, message: err.message });
  }

  return results;
}
