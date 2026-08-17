/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SankalpamSection } from '../templates/sankalpam';
import { Copy, Printer, ZoomIn, ZoomOut, Check, Eye, List, BookOpen, Languages } from 'lucide-react';
import { Panchanga } from '../types';
import { SupportedLanguage, SUPPORTED_LANGUAGES, renderMultilingualSankalpam } from '../utils/transliteration';

interface SankalpamDisplayProps {
  title: string;
  sections: SankalpamSection[];
  onBackToVerification: () => void;
  panchanga?: Panchanga;
  ritualType?: 'upakarma' | 'gayatri';
}

export default function SankalpamDisplay({ 
  title, 
  sections, 
  onBackToVerification,
  panchanga,
  ritualType
}: SankalpamDisplayProps) {
  const [language, setLanguage] = useState<SupportedLanguage>('tamil');
  const [isLargeText, setIsLargeText] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'stepByStep' | 'fullContiguous'>('stepByStep');

  const activeSections = panchanga && ritualType 
    ? renderMultilingualSankalpam(language, ritualType, panchanga)
    : sections;

  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>(
    activeSections.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );

  const handleCopy = () => {
    const contiguousText = activeSections
      .map(s => `--- ${s.title} ---\n${s.content}`)
      .join('\n\n');
    navigator.clipboard.writeText(contiguousText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.warn("Iframe blocked standard print. Using download fallback.", e);
    }
  };

  const handleDownloadHTML = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="ta">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #2D241E;
      background-color: #FAF8F5;
      max-width: 800px;
      margin: 40px auto;
      padding: 30px;
      line-height: 1.6;
    }
    .print-banner {
      background: #FFF9E6;
      border: 1px solid #E5E1D8;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 14px;
    }
    .print-btn {
      display: inline-block;
      background-color: #5D1E1E;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-top: 8px;
    }
    .print-btn:hover {
      background-color: #4A1818;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #5D1E1E;
      padding-bottom: 24px;
      margin-bottom: 32px;
      margin-top: 20px;
    }
    .header h1 {
      color: #5D1E1E;
      margin: 0 0 8px 0;
      font-size: 28px;
    }
    .header p {
      font-size: 11px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #8B7E74;
      margin: 0;
    }
    .section {
      margin-bottom: 32px;
      background: white;
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #E5E1D8;
      page-break-inside: avoid;
    }
    .section h2 {
      color: #5D1E1E;
      font-size: 18px;
      border-bottom: 1px solid #E5E1D8;
      padding-bottom: 8px;
      margin: 0 0 16px 0;
    }
    .content {
      white-space: pre-wrap;
      font-size: 15px;
      color: #2D241E;
    }
    .footer {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid #E5E1D8;
      text-align: center;
      font-size: 12px;
      color: #8B7E74;
      font-style: italic;
    }
    @media print {
      body {
        background-color: white;
        margin: 0;
        padding: 0;
      }
      .print-banner {
        display: none !important;
      }
      .section {
        border: none;
        padding: 0;
        margin-bottom: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="print-banner">
    <p style="margin: 0 0 8px 0; font-weight: bold; color: #5D1E1E;">🖨️ Standalone Printable Document Ready</p>
    <p style="margin: 0 0 12px 0;">This separate webpage was built to support instant, high-quality printing and PDF export without being blocked by browser preview constraints.</p>
    <button class="print-btn" onclick="window.print()">Save to PDF / Print Now</button>
  </div>

  <div class="header">
    <h1>${title}</h1>
    <p>SRI VAISHNAVA VADAKALAI • KRISHNA YAJURVEDA • SRIRANGAM SRIMAD ANDAVAN ASHRAMAM</p>
  </div>

  ${sections.map((section, idx) => `
    <div class="section">
      <h2>Section ${idx + 1} — ${section.title}</h2>
      <div class="content">${section.content}</div>
    </div>
  `).join('')}

  <div class="footer">
    அனந்த கல்யாண குண விஶிஷ்ட ஸ்ரீமன் நாராயண பிரீத்யர்த்தம் • Generated via deterministic Panchanga Verification System
  </div>
</body>
</html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[\s\(\)-]+/g, '_')}_Sankalpam.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = (expand: boolean) => {
    setExpandedSections(
      activeSections.reduce((acc, _, index) => ({ ...acc, [index]: expand }), {})
    );
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-md print:border-none print:shadow-none space-y-6">
      
      {/* Screen Only Interactive Viewport */}
      <div className="print:hidden space-y-6">
        {/* Upper Control Bar */}
        <div className="bg-stone-50 border-b border-stone-200 p-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Verified Sankalpam</span>
            <h2 className="text-2xl font-bold text-stone-800 mt-1 leading-tight tracking-tight" id="sankalpam-title">{title}</h2>
            <p className="text-sm text-stone-500 mt-1">
              Read, copy, or print the final Sankalpam. Select preferred language and text size.
            </p>
          </div>

          {/* Display Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 px-3 py-2 border border-stone-300 rounded-lg bg-white shadow-sm">
              <Languages className="w-4 h-4 text-[#5D1E1E]" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                className="bg-transparent text-sm font-semibold text-stone-700 focus:outline-none cursor-pointer outline-none border-none py-0 pr-6 pl-0"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.nativeLabel} ({lang.label})
                  </option>
                ))}
              </select>
            </div>

            {/* Text Size Control */}
            <button
              type="button"
              onClick={() => setIsLargeText(!isLargeText)}
              className="flex items-center gap-1.5 px-3 py-2 border border-stone-300 rounded-lg text-sm text-stone-700 hover:bg-stone-100 font-semibold transition-all cursor-pointer"
              title="Toggle Large Text"
            >
              {isLargeText ? <ZoomOut className="w-4 h-4 text-[#5D1E1E]" /> : <ZoomIn className="w-4 h-4 text-[#5D1E1E]" />}
              {isLargeText ? 'Standard Text' : 'Large Text (பெரிய எழுத்து)'}
            </button>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 border border-stone-300 rounded-lg text-sm text-stone-700 hover:bg-stone-100 font-semibold transition-all cursor-pointer"
            >
              {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#5D1E1E]" />}
              {isCopied ? 'Copied' : 'Copy Text (நகலெடு)'}
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 border border-stone-300 rounded-lg text-sm text-stone-700 hover:bg-stone-100 font-semibold transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#5D1E1E]" />
              Save to PDF / Print
            </button>

            {/* HTML Direct Print Export */}
            <button
              type="button"
              onClick={handleDownloadHTML}
              className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 border border-stone-300 rounded-lg text-sm text-stone-800 hover:bg-stone-200 font-semibold transition-all cursor-pointer shadow-sm"
              title="Download Standalone Printable Page"
            >
              📥 Standalone Printable
            </button>
          </div>
        </div>

        {/* Iframe Preview Detection Helper banner */}
        {isInIframe && (
          <div className="mx-6 md:mx-8 p-4 bg-amber-50/70 border border-amber-200/50 rounded-xl text-stone-700 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="font-bold text-[#5D1E1E]">🖨️ Save to PDF / Print Guide</p>
              <p className="text-stone-500">Browser security restricts printing inside iframes. For a perfect PDF, download the standalone page or open in a new tab.</p>
            </div>
            <button
              type="button"
              onClick={handleDownloadHTML}
              className="bg-[#5D1E1E] text-white hover:bg-[#4A1818] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              Download Standalone File (Recommended)
            </button>
          </div>
        )}

        {/* View Toggle Bar */}
        <div className="px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2 border border-stone-200 rounded-lg p-0.5 bg-stone-50">
            <button
              type="button"
              onClick={() => setViewMode('stepByStep')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'stepByStep' 
                  ? 'bg-[#5D1E1E] text-white shadow-sm' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              Step-by-Step (படிநிலைகள்)
            </button>
            <button
              type="button"
              onClick={() => setViewMode('fullContiguous')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'fullContiguous' 
                  ? 'bg-[#5D1E1E] text-white shadow-sm' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Full Scroll (முழு உரை)
            </button>
          </div>

          {viewMode === 'stepByStep' && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => toggleAll(true)}
                className="text-xs font-medium text-amber-805 hover:underline"
              >
                Expand All
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => toggleAll(false)}
                className="text-xs font-medium text-amber-805 hover:underline"
              >
                Collapse All
              </button>
            </div>
          )}
        </div>

        {/* Mantra Content Area */}
        <div className={`p-6 md:px-12 md:pb-12 space-y-6 select-text ${
          isLargeText ? 'text-xl md:text-2xl leading-relaxed font-semibold' : 'text-base md:text-lg leading-relaxed font-normal'
        } text-[#2D241E] font-serif`}>
          
          {viewMode === 'stepByStep' ? (
            <div className="space-y-6">
              {activeSections.map((section, idx) => {
                const isOpen = expandedSections[idx];
                return (
                  <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-[#FAF8F5]">
                    {/* Section Title Header */}
                    <button
                      type="button"
                      onClick={() => toggleSection(idx)}
                      className="w-full text-left bg-stone-50 border-b border-stone-200 p-4 font-bold flex items-center justify-between text-[#2D241E] hover:bg-stone-100 transition-all cursor-pointer"
                    >
                      <span>Section {idx + 1} — {section.title}</span>
                      <span className="text-xs font-semibold text-amber-800">
                        {isOpen ? '[- Collapse]' : '[+ Expand]'}
                      </span>
                    </button>

                    {/* Section Content Pane */}
                    {isOpen && (
                      <div className="p-5 md:p-6 md:px-8 whitespace-pre-wrap bg-white font-sans text-stone-900 border-t border-stone-50">
                        {section.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-10 whitespace-pre-wrap bg-[#FAF8F5] border border-stone-150 rounded-xl p-6 md:p-10 leading-relaxed font-sans text-stone-900">
              {activeSections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#5D1E1E] border-b border-[#E5E1D8] pb-2 uppercase tracking-wide">
                    Section {idx + 1} — {section.title}
                  </h3>
                  <div className="pl-2">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back button */}
        <div className="bg-stone-50 border-t border-stone-200 p-5 md:px-8 flex justify-between items-center">
          <button
            type="button"
            onClick={onBackToVerification}
            className="flex items-center gap-1 text-sm font-semibold text-stone-600 hover:text-stone-800 transition-all cursor-pointer"
          >
            ← Back to Verification Panel
          </button>
          <span className="text-xs text-stone-400">அனந்த கல்யாண குண விஶிஷ்ட ஸ்ரீமன் நாராயண பிரீத்யர்த்தம்</span>
        </div>
      </div>

      {/* Pristine Document layout for Print / Save to PDF */}
      <div className="hidden print:block print-only-container space-y-8 p-10 max-w-4xl mx-auto bg-white text-[#2D241E]">
        <div className="text-center border-b-2 border-[#5D1E1E] pb-6 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#5D1E1E] mb-2">{title}</h1>
          <p className="text-xs uppercase tracking-widest text-[#8B7E74] font-bold">
            SRI VAISHNAVA VADAKALAI • KRISHNA YAJURVEDA • SRIRANGAM SRIMAD ANDAVAN ASHRAMAM
          </p>
        </div>

        {activeSections.map((section, idx) => (
          <div key={idx} className="space-y-4" style={{ pageBreakInside: 'avoid' }}>
            <h2 className="text-lg font-bold text-[#5D1E1E] border-b border-[#E5E1D8] pb-1">
              Section {idx + 1} — {section.title}
            </h2>
            <div className="text-base leading-relaxed font-serif text-[#2D241E] whitespace-pre-wrap pl-1">
              {section.content}
            </div>
          </div>
        ))}

        <div className="pt-8 border-t border-[#E5E1D8] text-center text-xs text-[#8B7E74] italic mt-12">
          அனந்த கல்யாண குண விஶிஷ்ட ஸ்ரீமன் நாராயண பிரீத்யர்த்தம் • Generated via deterministic Panchanga Verification System
        </div>
      </div>

    </div>
  );
}
