/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { UserProfile } from '../types';
import { Settings, MapPin, Award, BookOpen, Compass, Shield } from 'lucide-react';

interface ProfileSettingsProps {
  profile: UserProfile;
  onChange: (profile: UserProfile) => void;
}

export default function ProfileSettings({ profile, onChange }: ProfileSettingsProps) {
  const [veda, setVeda] = useState(profile.veda);
  const [sampradaya, setSampradaya] = useState(profile.sampradaya);
  const [sect, setSect] = useState(profile.sect || 'Vadakalai');
  const [acharyaTradition, setAcharyaTradition] = useState(profile.acharyaTradition);
  const [location, setLocation] = useState(profile.location);

  const handleResetToDefaults = () => {
    const defaults = {
      veda: 'Krishna Yajurveda',
      sampradaya: 'Sri Vaishnava',
      sect: 'Vadakalai',
      acharyaTradition: 'Srirangam Srimad Andavan Ashramam',
      location: 'Chennai, Tamil Nadu, India',
    };
    setVeda(defaults.veda);
    setSampradaya(defaults.sampradaya);
    setSect(defaults.sect);
    setAcharyaTradition(defaults.acharyaTradition);
    setLocation(defaults.location);
    onChange(defaults);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 md:p-8 space-y-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-3">
          <Settings className="w-6 h-6 text-amber-700" id="profile-settings-icon" />
          <div>
            <h2 className="text-xl font-semibold text-stone-800 tracking-tight" id="profile-settings-heading">யஜுர்வேதி நித்ய அனுஷ்டான சுயவிவரம்</h2>
            <p className="text-sm text-stone-500 mt-1 font-sans">Ritual Profile & Tradition Settings</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleResetToDefaults}
          className="text-xs bg-stone-200 text-stone-700 hover:bg-stone-300 transition-all font-semibold px-3 py-1.5 rounded-lg border border-stone-300 shadow-sm"
        >
          Reset to System Defaults
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Veda selection */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <BookOpen className="w-4 h-4 text-amber-600" />
            வேதம் (Veda)
          </label>
          <select
            value={veda}
            onChange={(e) => {
              setVeda(e.target.value);
              onChange({ ...profile, veda: e.target.value });
            }}
            className="w-full bg-white border border-stone-300 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
          >
            <option value="Krishna Yajurveda">Krishna Yajurveda (கிருஷ்ண யஜுர்வேதம்) (Default)</option>
            <option value="Shukla Yajurveda">Shukla Yajurveda (Phase 2 / Upcoming)</option>
            <option value="Rigveda">Rigveda (Phase 2 / Upcoming)</option>
            <option value="Samaveda">Samaveda (Phase 2 / Upcoming)</option>
          </select>
          <p className="text-xs text-stone-400">Yajur Upakarma is optimized for Krishna Yajurvedi followers in Phase 1.</p>
        </div>

        {/* Sampradaya selection */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <Compass className="w-4 h-4 text-amber-600" />
            ஸம்ப்ரதாயம் (Sampradaya)
          </label>
          <select
            value={sampradaya}
            onChange={(e) => {
              setSampradaya(e.target.value);
              onChange({ ...profile, sampradaya: e.target.value });
            }}
            className="w-full bg-white border border-stone-300 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
          >
            <option value="Sri Vaishnava">Sri Vaishnava (ஸ்ரீவைஷ்ணவம்) (Default)</option>
            <option value="Smartha">Smartha (ஸ்மார்த்தம்) (Upcoming)</option>
            <option value="Madhva">Madhva (மாத்வம்) (Upcoming)</option>
          </select>
          <p className="text-xs text-stone-400">Panchanga engine is customized for Sri Vaishnava ritual lineages.</p>
        </div>

        {/* Sect Selection */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <Shield className="w-4 h-4 text-amber-600" />
            பிரிவு (Sect)
          </label>
          <select
            value={sect}
            onChange={(e) => {
              setSect(e.target.value);
              onChange({ ...profile, sect: e.target.value });
            }}
            className="w-full bg-white border border-stone-300 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
          >
            <option value="Vadakalai">Vadakalai (வடகலை) (Default)</option>
            <option value="Thenkalai">Thenkalai (தென்கலை) (Upcoming / Experimental)</option>
          </select>
          <p className="text-xs text-stone-400">Selecting Thenkalai will trigger sectarian verification warnings as a helpful safety guard.</p>
        </div>

        {/* Acharya Tradition */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <Award className="w-4 h-4 text-amber-600" />
            ஆச்சார்ய பரம்பரை (Acharya Tradition)
          </label>
          <select
            value={acharyaTradition}
            onChange={(e) => {
              setAcharyaTradition(e.target.value);
              onChange({ ...profile, acharyaTradition: e.target.value });
            }}
            className="w-full bg-white border border-stone-300 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
          >
            <option value="Srirangam Srimad Andavan Ashramam">Srirangam Srimad Andavan Ashramam (ஸ்ரீமத் ஆண்டவன் ஆஸ்ரமம்) (Default)</option>
            <option value="Sri Ahobila Mutt">Sri Ahobila Mutt (ஸ்ரீ அஹோபில மடம்) (Upcoming)</option>
            <option value="Sri Parakala Mutt">Sri Parakala Mutt (ஸ்ரீ பரகால மடம்) (Upcoming)</option>
            <option value="Swayamacharya Purusha">Swayamacharya Purusha (ஸ்வயம்ஆசார்ய புருஷா) (Upcoming)</option>
          </select>
        </div>

        {/* Location setting */}
        <div className="space-y-2 md:col-span-2">
          <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <MapPin className="w-4 h-4 text-amber-600" />
            இடம் (Location)
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              onChange({ ...profile, location: e.target.value });
            }}
            placeholder="Chennai, Tamil Nadu, India (Default)"
            className="w-full bg-white border border-stone-300 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
          />
          <p className="text-xs text-stone-400">Panchangam and ritual sunrise details adjust automatically to this location. Any location other than Chennai will shift astronomical boundaries and flag verification parameters for safety.</p>
        </div>
      </div>
    </div>
  );
}
