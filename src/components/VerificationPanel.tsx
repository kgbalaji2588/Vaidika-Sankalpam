/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Panchanga, PanchangaVerificationData, VerificationState } from '../types';
import { ShieldCheck, ShieldAlert, CheckCircle, Edit3, Save, RotateCcw } from 'lucide-react';

interface VerificationPanelProps {
  data: PanchangaVerificationData;
  onApprove: (finalApproved: Panchanga) => void;
  isUnlocked: boolean;
}

const PANCHANGA_LABELS: Record<keyof Panchanga, string> = {
  samvatsara: 'Samvatsara (ஸம்வத்ஸரம்)',
  ayana: 'Ayana (அயனம்)',
  ritu: 'Ritu (ருது)',
  masa: 'Masa (மாஸம்)',
  paksha: 'Paksha (பக்ஷம்)',
  tithi: 'Tithi (திதி)',
  vara: 'Vara (வாரம்)',
  nakshatra: 'Nakshatra (நக்ஷத்ரம்)',
  yoga: 'Yoga (யோகம்)',
  karana: 'Karana (கரணம்)',
};

export default function VerificationPanel({ data, onApprove, isUnlocked }: VerificationPanelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPanchanga, setEditedPanchanga] = useState<Panchanga>({
    samvatsara: '',
    ayana: '',
    ritu: '',
    masa: '',
    paksha: '',
    tithi: '',
    vara: '',
    nakshatra: '',
    yoga: '',
    karana: '',
  });

  // Keep edited state in sync when data changes
  useEffect(() => {
    const source = data.primarySource || data.calculated || {
      samvatsara: '',
      ayana: '',
      ritu: '',
      masa: '',
      paksha: '',
      tithi: '',
      vara: '',
      nakshatra: '',
      yoga: '',
      karana: '',
    };
    setEditedPanchanga({ ...source });
  }, [data]);

  const handleFieldChange = (field: keyof Panchanga, value: string) => {
    setEditedPanchanga(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApprove = () => {
    onApprove(editedPanchanga);
    setIsEditing(false);
  };

  const handleReset = () => {
    const source = data.primarySource || data.calculated || {
      samvatsara: '',
      ayana: '',
      ritu: '',
      masa: '',
      paksha: '',
      tithi: '',
      vara: '',
      nakshatra: '',
      yoga: '',
      karana: '',
    };
    setEditedPanchanga({ ...source });
    setIsEditing(false);
  };

  const isVerified = data.status === 'VERIFIED';
  const isConflict = data.status === 'CONFLICT';
  const isUnverified = data.status === 'UNVERIFIED';

  const keys: (keyof Panchanga)[] = [
    'samvatsara', 'ayana', 'ritu', 'masa', 'paksha', 'tithi', 'vara', 'nakshatra', 'yoga', 'karana'
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header Banner */}
      <div className={`p-5 flex items-start gap-4 border-b ${
        isVerified 
          ? 'bg-emerald-50/50 border-emerald-100' 
          : isConflict 
            ? 'bg-amber-50/50 border-amber-100' 
            : 'bg-amber-50/50 border-amber-100'
      }`}>
        {isVerified ? (
          <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-0.5" />
        ) : (
          <ShieldAlert className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 justify-between">
            <h3 className="text-lg font-semibold text-stone-800 tracking-tight" id="panchanga-status-header">
              Panchanga Verification — {data.year}
            </h3>
            <span className={`px-2.5 py-1 rounded text-xs font-semibold tracking-wider ${
              isVerified 
                ? 'bg-emerald-100 text-emerald-800' 
                : isConflict 
                  ? 'bg-rose-100 text-rose-800' 
                  : 'bg-amber-100 text-amber-800'
            }`}>
              {isVerified ? '🟢 VERIFIED' : isConflict ? '🟠 DISCREPANCY FOUND' : '🟠 VERIFICATION REQUIRED'}
            </span>
          </div>
          
          <p className="text-sm text-stone-600 mt-1">
            Date of Observance: <strong className="text-stone-800 font-medium">{data.dateString}</strong>
          </p>

          {isVerified && (
            <p className="text-sm text-emerald-700 font-medium mt-2">
              All authoritative calculations align perfectly with the Srirangam Srimad Andavan Ashramam Panchanga.
            </p>
          )}

          {isUnverified && (
            <div className="mt-3 p-3 bg-white border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 font-medium">
                Verification required — Panchanga data could not be reliably verified.
              </p>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                We do not have pre-verified digital records for {data.year}. Please review and update the Panchanga fields below manually, or upload a scanned calendar to populate the data.
              </p>
            </div>
          )}

          {isConflict && (
            <div className="mt-3 p-3 bg-rose-50 border border-rose-100 rounded-lg text-xs text-rose-800 space-y-1">
              <p className="font-semibold text-sm">Review Required Differences:</p>
              {data.discrepancies.map((d, i) => (
                <p key={i}>• {d}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table / Form */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Kala Vivarana Parameters (கால விவரங்கள்)</h4>
          <div className="flex gap-2">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-300 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-all font-medium"
              >
                <Edit3 className="w-4 h-4" />
                Edit / Override
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-300 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-all font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="border border-stone-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 bg-stone-50 border-b border-stone-200 text-xs font-semibold text-stone-500 tracking-wider p-3 hidden md:grid">
            <div className="col-span-1">PARAMETER</div>
            <div className="col-span-1">CALCULATED VALUE</div>
            <div className="col-span-1">ONLINE / PRIMARY SOURCE</div>
            <div className="col-span-1">APPROVED FINAL VALUE</div>
          </div>

          <div className="divide-y divide-stone-200">
            {keys.map((key) => {
              const calcVal = data.calculated?.[key] || '—';
              const sourceVal = data.primarySource?.[key] || '—';
              const isMismatch = data.calculated && data.primarySource && data.calculated[key] !== data.primarySource[key];

              return (
                <div key={key} className={`grid grid-cols-1 md:grid-cols-4 items-center p-3 text-sm transition-all ${
                  isMismatch ? 'bg-amber-50/40' : 'hover:bg-stone-50/40'
                }`}>
                  {/* Parameter label */}
                  <div className="font-medium text-stone-700 pb-1 md:pb-0">
                    <span className="block md:hidden text-xs text-stone-400 font-normal uppercase tracking-wider mb-0.5">Parameter</span>
                    {PANCHANGA_LABELS[key]}
                  </div>

                  {/* Calculated source value */}
                  <div className="text-stone-600 pb-1 md:pb-0">
                    <span className="inline-block md:hidden text-xs text-stone-400 mr-2 font-normal">Calculated:</span>
                    <span className="font-mono bg-stone-100 text-stone-800 text-xs px-2 py-1 rounded">
                      {calcVal}
                    </span>
                  </div>

                  {/* Primary source value */}
                  <div className="text-stone-600 pb-2 md:pb-0">
                    <span className="inline-block md:hidden text-xs text-stone-400 mr-2 font-normal">Online/Primary:</span>
                    <span className="font-mono bg-stone-100 text-stone-800 text-xs px-2 py-1 rounded">
                      {sourceVal}
                    </span>
                  </div>

                  {/* Approved value input/display */}
                  <div className="col-span-1">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedPanchanga[key] || ''}
                        onChange={(e) => handleFieldChange(key, e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-md py-1.5 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-mono"
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="inline-block md:hidden text-xs text-stone-400 mr-2 font-normal">Approved:</span>
                        <span className="font-semibold text-amber-800 bg-amber-50 border border-amber-100 text-xs px-2 py-1 rounded">
                          {editedPanchanga[key] || '—'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Approval Lock Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-stone-50 border border-stone-200 rounded-xl p-5 md:p-6 mt-6">
          <div className="text-center sm:text-left">
            <h5 className="font-semibold text-stone-800">Sankalpam Generation Control</h5>
            <p className="text-sm text-stone-500 mt-1">
              {isUnlocked 
                ? '🟢 Active approved Panchanga is currently unlocking your ritual texts.'
                : '🔒 Sankalpam displays remain locked until you approve the values above.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleApprove}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all text-sm whitespace-nowrap cursor-pointer"
          >
            <CheckCircle className="w-5 h-5" />
            Approve & Unlock Sankalpam
          </button>
        </div>
      </div>
    </div>
  );
}
