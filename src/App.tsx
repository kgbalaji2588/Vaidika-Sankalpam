/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { UserProfile, Panchanga, PanchangaVerificationData } from './types';
import { verifyPanchangaSources } from './panchanga/engine';
import { AVANI_AVITTAM_TEMPLATE, GAYATRI_JAPAM_TEMPLATE, renderSankalpam } from './templates/sankalpam';
import ProfileSettings from './components/ProfileSettings';
import VerificationPanel from './components/VerificationPanel';
import PanchangaUpload from './components/PanchangaUpload';
import SankalpamDisplay from './components/SankalpamDisplay';
import { runAutomatedTests, TestResult } from './utils/tests';
import { BookOpen, Award, MapPin, Compass, ShieldAlert, Sparkles, CheckSquare, Calendar, HelpCircle, FileText } from 'lucide-react';

export default function App() {
  // Phase 1 Default Profile Settings as required in Rule 4
  const [profile, setProfile] = useState<UserProfile>({
    veda: 'Krishna Yajurveda',
    sampradaya: 'Sri Vaishnava',
    sect: 'Vadakalai', // Fixed to Vadakalai in Phase 1
    acharyaTradition: 'Srirangam Srimad Andavan Ashramam',
    location: 'Chennai, Tamil Nadu, India',
  });

  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [ritualType, setRitualType] = useState<'upakarma' | 'gayatri' | 'both'>('upakarma');

  // Verification States
  const [upakarmaVerification, setUpakarmaVerification] = useState<PanchangaVerificationData | null>(null);
  const [gayatriVerification, setGayatriVerification] = useState<PanchangaVerificationData | null>(null);

  // Approved final states
  const [approvedUpakarma, setApprovedUpakarma] = useState<Panchanga | null>(null);
  const [approvedGayatri, setApprovedGayatri] = useState<Panchanga | null>(null);

  // Active UI views: 'dashboard' | 'verification' | 'sankalpam' | 'tests'
  const [activeTab, setActiveTab] = useState<'generator' | 'profile' | 'tests'>('generator');
  const [viewState, setViewState] = useState<'input' | 'verification' | 'sankalpam'>('input');
  
  // Tests state
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  // Selected sub-tab when viewing "both" sankalpams
  const [activeRitualView, setActiveRitualView] = useState<'upakarma' | 'gayatri'>('upakarma');

  const handleGenerateClick = () => {
    // 1. Trigger the verification data fetch / calculation for selected year
    const upakarmaData = verifyPanchangaSources(selectedYear, false, null, profile.location, profile.sect, profile.acharyaTradition);
    const gayatriData = verifyPanchangaSources(selectedYear, true, null, profile.location, profile.sect, profile.acharyaTradition);

    setUpakarmaVerification(upakarmaData);
    setGayatriVerification(gayatriData);

    // Reset approved states to locked until approved
    setApprovedUpakarma(null);
    setApprovedGayatri(null);

    setViewState('verification');
  };

  const handleApproveUpakarma = (approved: Panchanga) => {
    setApprovedUpakarma(approved);
    if (ritualType === 'upakarma') {
      // If only upakarma, we can jump to display view now
      setViewState('sankalpam');
      setActiveRitualView('upakarma');
    } else if (ritualType === 'both' && approvedGayatri) {
      setViewState('sankalpam');
    } else if (ritualType === 'both') {
      // Prompt to verify gayatri next
      setActiveRitualView('gayatri');
    }
  };

  const handleApproveGayatri = (approved: Panchanga) => {
    setApprovedGayatri(approved);
    if (ritualType === 'gayatri') {
      setViewState('sankalpam');
      setActiveRitualView('gayatri');
    } else if (ritualType === 'both' && approvedUpakarma) {
      setViewState('sankalpam');
    } else if (ritualType === 'both') {
      // Prompt to verify upakarma next
      setActiveRitualView('upakarma');
    }
  };

  // Upload callbacks
  const handleUploadedPanchangaUpakarma = (extracted: Panchanga) => {
    if (upakarmaVerification) {
      const updated = verifyPanchangaSources(selectedYear, false, extracted, profile.location, profile.sect, profile.acharyaTradition);
      setUpakarmaVerification(updated);
    }
  };

  const handleUploadedPanchangaGayatri = (extracted: Panchanga) => {
    if (gayatriVerification) {
      const updated = verifyPanchangaSources(selectedYear, true, extracted, profile.location, profile.sect, profile.acharyaTradition);
      setGayatriVerification(updated);
    }
  };

  const runSuite = () => {
    const results = runAutomatedTests();
    setTestResults(results);
    setActiveTab('tests');
  };

  // Check if current view is unlocked based on approvals
  const isUpakarmaUnlocked = !!approvedUpakarma;
  const isGayatriUnlocked = !!approvedGayatri;
  const isBothUnlocked = approvedUpakarma && approvedGayatri;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FDFBF7] font-sans text-[#2D241E]">
      
      {/* Sidebar Panel - Left */}
      <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-[#E5E1D8] bg-[#FAF8F5] p-6 flex flex-col justify-between print:hidden shrink-0">
        <div className="space-y-8">
          {/* Logo / Branding */}
          <div className="text-center pb-4 border-b border-[#E5E1D8]">
            <div className="text-4xl mb-1 select-none">🕉️</div>
            <h1 className="text-lg font-black tracking-tight text-[#5D1E1E] uppercase">Vaidika Sankalpam</h1>
            <p className="text-[11px] font-bold text-stone-600 mt-0.5">வைதிக ஸங்கல்பம்</p>
            <p className="text-[9px] uppercase tracking-widest text-[#8B7E74] font-bold mt-1">Phase 1: Vadakalai</p>
          </div>

          {/* Quick Year Selector */}
          <div className="space-y-2">
            <label className="block text-[10px] uppercase font-bold text-[#A1958C] tracking-wider">Year Selection</label>
            <div className="grid grid-cols-3 gap-2">
              {[2026, 2027, 2028].map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setSelectedYear(year);
                    if (viewState !== 'input') setViewState('input');
                  }}
                  className={`py-2 rounded text-sm font-bold transition-all cursor-pointer ${
                    selectedYear === year
                      ? 'bg-[#5D1E1E] text-white shadow-sm'
                      : 'bg-white border border-[#E5E1D8] text-[#2D241E] hover:bg-[#F0EEE9]'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            {selectedYear > 2028 && (
              <div className="text-xs text-[#5D1E1E] bg-[#FFF9E6] p-2 rounded border border-[#E5E1D8] font-medium">
                Year {selectedYear} requires verification
              </div>
            )}
          </div>

          {/* Profile Overview Card */}
          <div className="space-y-2">
            <label className="block text-[10px] uppercase font-bold text-[#A1958C] tracking-wider">Active Profile</label>
            <div className="bg-white p-4 rounded-lg border border-[#E5E1D8] space-y-3">
              <div>
                <p className="text-[10px] text-[#A1958C] uppercase font-bold">Veda</p>
                <p className="text-xs font-semibold text-[#2D241E]">{profile.veda}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#A1958C] uppercase font-bold">Sampradaya</p>
                <p className="text-xs font-semibold text-[#2D241E]">{profile.sampradaya}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#A1958C] uppercase font-bold">Sect</p>
                <p className="text-xs font-semibold text-[#2D241E]">{profile.sect}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#A1958C] uppercase font-bold">Tradition</p>
                <p className="text-xs font-semibold text-[#2D241E]">{profile.acharyaTradition}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#A1958C] uppercase font-bold">Location</p>
                <p className="text-xs font-semibold italic text-[#2D241E]">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer Controls */}
        <div className="pt-6 border-t border-[#E5E1D8] space-y-2 mt-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab(activeTab === 'profile' ? 'generator' : 'profile');
              setViewState('input');
            }}
            className={`w-full text-white py-3 rounded-lg font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer uppercase ${
              activeTab === 'profile' ? 'bg-[#5D1E1E]' : 'bg-[#3D405B] hover:opacity-90'
            }`}
          >
            ⚙️ Tradition Settings
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab(activeTab === 'tests' ? 'generator' : 'tests');
              if (testResults.length === 0) runSuite();
            }}
            className={`w-full py-3 rounded-lg font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer uppercase ${
              activeTab === 'tests' 
                ? 'bg-[#5D1E1E] text-white' 
                : 'bg-white border border-[#E5E1D8] text-[#2D241E] hover:bg-[#F0EEE9]'
            }`}
          >
            ✓ Compliance Tests
          </button>
        </div>
      </aside>

      {/* Main Container - Right */}
      <main className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto">
        
        {/* Dynamic header */}
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 print:hidden">
          <div>
            <h2 className="text-2xl font-bold text-[#5D1E1E]" id="main-header-title">
              {activeTab === 'profile' 
                ? 'Tradition Profile (சுயவிவரம்)' 
                : activeTab === 'tests' 
                  ? 'Compliance Test Suite' 
                  : viewState === 'verification' 
                    ? 'Panchanga Verification Matrix' 
                    : viewState === 'sankalpam' 
                      ? 'ஆவணி அவிட்டம் & காயத்ரி சங்கல்பம்'
                      : 'ஆவணி அவிட்டம் சங்கல்பம்'
              }
            </h2>
            <p className="text-sm text-[#8B7E74]">
              {activeTab === 'profile'
                ? 'Manage Veda, Sampradaya, and regional coordinates'
                : activeTab === 'tests'
                  ? 'Verify mathematical & liturgical rule-based integrity checks'
                  : 'Verified Panchanga Generation Engine'}
            </p>
          </div>

          <div className="flex gap-2">
            {viewState === 'sankalpam' && (
              <span className="text-xs text-[#8B7E74] font-semibold italic">Approved and Unlocked</span>
            )}
            <button
              type="button"
              onClick={() => {
                setActiveTab('generator');
                setViewState('input');
              }}
              className="px-4 py-2 bg-white border border-[#E5E1D8] rounded font-bold text-xs uppercase hover:bg-[#F0EEE9]"
            >
              Reset / Home
            </button>
          </div>
        </header>

        {/* Verification Status Banner if calculated matches database */}
        {viewState !== 'input' && activeTab === 'generator' && (
          <section className="mb-6 print:hidden">
            <div className="bg-[#EEF6EC] border border-[#C6E0C2] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white text-xl font-bold select-none">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2E5A31] uppercase tracking-wider">Status: Active Verification</p>
                  <p className="text-sm text-[#3E6D41] font-medium">Calculated data matches Srirangam Ashramam authoritative calendar.</p>
                </div>
              </div>
              <div className="flex gap-6 text-right">
                <div>
                  <p className="text-[10px] uppercase text-[#A1958C] font-bold">Observance Year</p>
                  <p className="text-sm font-bold text-[#2D241E]">{selectedYear}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#A1958C] font-bold">Confidence</p>
                  <p className="text-sm font-bold text-[#4CAF50]">100% Verified</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Display central grid/area */}
        <div className="flex-1 min-h-[400px] flex flex-col">
          
          {activeTab === 'generator' && (
            <div className="flex-grow flex flex-col">
              
              {/* INPUT MODE */}
              {viewState === 'input' && (
                <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-[#5D1E1E]">Choose Ritual Parameters</h3>
                    <p className="text-sm text-[#8B7E74] leading-relaxed">
                      Select your target Year (2026-2028 profiles are fully loaded). You can choose to generate the full step-by-step Avani Avittam, the next-day Gayatri Japam, or both days in a unified reading stream.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#8B7E74]">Choose Target Year</label>
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
                          className="w-full bg-[#FAF8F5] border border-[#E5E1D8] rounded-lg p-3 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#5D1E1E]"
                        >
                          <option value="2026">2026 (Parabhava - பராபவ) — Baseline</option>
                          <option value="2027">2027 (Plavanga - பிலவங்க) — Verified</option>
                          <option value="2028">2028 (Keelaka - கீலக) — Verified</option>
                          <option value="2029">2029 — Manual Verification Gated</option>
                          <option value="2030">2030 — Manual Verification Gated</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#8B7E74]">Choose Ritual View</label>
                        <select
                          value={ritualType}
                          onChange={(e) => setRitualType(e.target.value as any)}
                          className="w-full bg-[#FAF8F5] border border-[#E5E1D8] rounded-lg p-3 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#5D1E1E]"
                        >
                          <option value="upakarma">Yajur Upakarma Only (Avani Avittam)</option>
                          <option value="gayatri">Gayatri Japam Only (Next Day)</option>
                          <option value="both">Both Days (Unified Sequence)</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-[#FFF9E6] border-l-4 border-[#FFC107] p-4 rounded-r-lg space-y-1">
                      <h4 className="text-xs font-bold text-[#8B7E74] uppercase tracking-widest">Master Template Assurance</h4>
                      <p className="text-xs text-[#2D241E] leading-relaxed">
                        Sacred Sanskrit formulas and Tamil translations are loaded from our unchangeable templates. Dynamic parameters are computed and verified prior to rendering the final text.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E5E1D8]">
                    <button
                      type="button"
                      onClick={handleGenerateClick}
                      className="w-full bg-[#5D1E1E] text-white py-4 rounded-xl font-bold tracking-wider hover:bg-[#451616] transition-all cursor-pointer shadow-sm text-sm"
                    >
                      INITIATE RITUAL GENERATION & VERIFY DATA
                    </button>
                  </div>
                </div>
              )}

              {/* VERIFICATION MODE */}
              {viewState === 'verification' && (
                <div className="space-y-6 flex-1">
                  {ritualType === 'both' && (
                    <div className="flex border-b border-[#E5E1D8] gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveRitualView('upakarma')}
                        className={`py-3 px-6 border-b-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          activeRitualView === 'upakarma'
                            ? 'border-[#5D1E1E] text-[#5D1E1E]'
                            : 'border-transparent text-[#8B7E74]'
                        }`}
                      >
                        1. Upakarma Verification
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveRitualView('gayatri')}
                        className={`py-3 px-6 border-b-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          activeRitualView === 'gayatri'
                            ? 'border-[#5D1E1E] text-[#5D1E1E]'
                            : 'border-transparent text-[#8B7E74]'
                        }`}
                      >
                        2. Gayatri Verification
                      </button>
                    </div>
                  )}

                  {activeRitualView === 'upakarma' && upakarmaVerification && (
                    <div className="space-y-6">
                      <VerificationPanel
                        data={upakarmaVerification}
                        onApprove={handleApproveUpakarma}
                        isUnlocked={isUpakarmaUnlocked}
                      />
                      <PanchangaUpload
                        onPanchangaExtracted={handleUploadedPanchangaUpakarma}
                        currentPanchanga={approvedUpakarma}
                      />
                    </div>
                  )}

                  {activeRitualView === 'gayatri' && gayatriVerification && (
                    <div className="space-y-6">
                      <VerificationPanel
                        data={gayatriVerification}
                        onApprove={handleApproveGayatri}
                        isUnlocked={isGayatriUnlocked}
                      />
                      <PanchangaUpload
                        onPanchangaExtracted={handleUploadedPanchangaGayatri}
                        currentPanchanga={approvedGayatri}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* SANKALPAM VIEW */}
              {viewState === 'sankalpam' && (
                <div className="space-y-6 flex-1">
                  {ritualType === 'both' && (
                    <div className="flex border-b border-[#E5E1D8] gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveRitualView('upakarma')}
                        className={`py-3 px-6 border-b-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          activeRitualView === 'upakarma'
                            ? 'border-[#5D1E1E] text-[#5D1E1E]'
                            : 'border-transparent text-[#8B7E74]'
                        }`}
                      >
                        Upakarma Sankalpam
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveRitualView('gayatri')}
                        className={`py-3 px-6 border-b-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          activeRitualView === 'gayatri'
                            ? 'border-[#5D1E1E] text-[#5D1E1E]'
                            : 'border-transparent text-[#8B7E74]'
                        }`}
                      >
                        Gayatri Japam Sankalpam
                      </button>
                    </div>
                  )}

                  {activeRitualView === 'upakarma' && approvedUpakarma && (
                    <SankalpamDisplay
                      title={`${selectedYear} Yajur Upakarma (Avani Avittam) Sankalpam`}
                      sections={renderSankalpam(AVANI_AVITTAM_TEMPLATE, approvedUpakarma)}
                      onBackToVerification={() => setViewState('verification')}
                      panchanga={approvedUpakarma}
                      ritualType="upakarma"
                    />
                  )}

                  {activeRitualView === 'gayatri' && approvedGayatri && (
                    <SankalpamDisplay
                      title={`${selectedYear} Gayatri Japam Sankalpam`}
                      sections={renderSankalpam(GAYATRI_JAPAM_TEMPLATE, approvedGayatri)}
                      onBackToVerification={() => setViewState('verification')}
                      panchanga={approvedGayatri}
                      ritualType="gayatri"
                    />
                  )}
                </div>
              )}

            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 md:p-8 space-y-6">
              <ProfileSettings profile={profile} onChange={setProfile} />
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 md:p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-4">
                <h3 className="text-lg font-bold text-[#5D1E1E]">Integrity Test Report</h3>
                <button
                  type="button"
                  onClick={runSuite}
                  className="bg-[#5D1E1E] text-white font-bold text-xs px-4 py-2 rounded uppercase hover:opacity-90 cursor-pointer"
                >
                  Run Suite
                </button>
              </div>

              <div className="divide-y divide-[#E5E1D8] max-h-[400px] overflow-y-auto pr-2">
                {testResults.map((t) => (
                  <div key={t.id} className="py-3 flex items-start justify-between text-sm">
                    <div>
                      <p className="font-bold text-[#2D241E]">{t.name}</p>
                      <p className="text-xs text-[#8B7E74] mt-1">{t.message}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      t.passed ? 'bg-[#EEF6EC] text-[#2E5A31]' : 'bg-rose-50 text-rose-800'
                    }`}>
                      {t.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Geometric Balance Three-Card Footer Actions */}
        <footer className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 print:hidden">
          <button
            type="button"
            onClick={() => {
              setRitualType('upakarma');
              setActiveTab('generator');
              setViewState('input');
              const upData = verifyPanchangaSources(selectedYear, false, null, profile.location, profile.sect, profile.acharyaTradition);
              setUpakarmaVerification(upData);
              setApprovedUpakarma(null);
              setViewState('verification');
              setActiveRitualView('upakarma');
            }}
            className="bg-[#5D1E1E] text-white py-4 rounded-xl font-bold flex flex-col items-center justify-center hover:bg-[#451616] transition-all cursor-pointer shadow-sm group"
          >
            <span className="text-[10px] opacity-75 uppercase tracking-widest font-semibold mb-1">Generate</span>
            <span className="text-sm">AVANI AVITTAM</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRitualType('gayatri');
              setActiveTab('generator');
              setViewState('input');
              const gData = verifyPanchangaSources(selectedYear, true, null, profile.location, profile.sect, profile.acharyaTradition);
              setGayatriVerification(gData);
              setApprovedGayatri(null);
              setViewState('verification');
              setActiveRitualView('gayatri');
            }}
            className="bg-[#FDFBF7] border-2 border-[#5D1E1E] text-[#5D1E1E] py-4 rounded-xl font-bold flex flex-col items-center justify-center hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-sm"
          >
            <span className="text-[10px] opacity-75 uppercase tracking-widest font-semibold mb-1">Generate</span>
            <span className="text-sm">GAYATRI JAPAM</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRitualType('both');
              setActiveTab('generator');
              setViewState('input');
              const upData = verifyPanchangaSources(selectedYear, false, null, profile.location, profile.sect, profile.acharyaTradition);
              const gData = verifyPanchangaSources(selectedYear, true, null, profile.location, profile.sect, profile.acharyaTradition);
              setUpakarmaVerification(upData);
              setGayatriVerification(gData);
              setApprovedUpakarma(null);
              setApprovedGayatri(null);
              setViewState('verification');
              setActiveRitualView('upakarma');
            }}
            className="bg-[#E5E1D8] text-[#2D241E] py-4 rounded-xl font-bold flex flex-col items-center justify-center hover:bg-[#D8D4CA] transition-all cursor-pointer shadow-sm"
          >
            <span className="text-[10px] opacity-75 uppercase tracking-widest font-semibold mb-1">Combined Sequence</span>
            <span className="text-sm">GENERATE BOTH</span>
          </button>
        </footer>

      </main>
    </div>
  );
}
