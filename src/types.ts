/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Panchanga {
  samvatsara: string;    // e.g., "பராபவ" (Parabhava)
  ayana: string;         // e.g., "தக்ஷிணாயனே" (Dakshinayane)
  ritu: string;          // e.g., "வர்ஷ" (Varsha)
  masa: string;          // e.g., "ஶ்ராவண" (Shravana) or "ஸிம்ஹ" (Simha)
  paksha: string;        // e.g., "ஶுக்ல" (Shukla) or "க்ருஷ்ண" (Krishna)
  tithi: string;         // e.g., "பௌர்ணமாஸ்யாம்" (Pournamasyam)
  vara: string;          // e.g., "குரு" (Guru) or "ப்ருகு" (Bhrigu)
  nakshatra: string;     // e.g., "ஶ்ரவிஷ்டா" (Shravishtha / Dhanishtha)
  yoga: string;          // e.g., "ஶோபன" (Shobhana)
  karana: string;        // e.g., "பவ" (Bava)
}

export interface UserProfile {
  veda: string;             // "Krishna Yajurveda"
  sampradaya: string;       // "Sri Vaishnava"
  sect: string;             // "Vadakalai"
  acharyaTradition: string; // "Srirangam Srimad Andavan Ashramam"
  location: string;         // "Chennai, Tamil Nadu, India"
}

export type VerificationState = 'VERIFIED' | 'PENDING' | 'CONFLICT' | 'UNVERIFIED';

export interface SourceValue<T> {
  value: T;
  source: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface PanchangaVerificationData {
  year: number;
  dateString: string; // e.g., "2026-08-27"
  calculated: Panchanga | null;
  primarySource: Panchanga | null;
  secondarySource: Panchanga | null;
  uploadedSource: Panchanga | null;
  status: VerificationState;
  discrepancies: string[];
}
