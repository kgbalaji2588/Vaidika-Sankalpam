/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Panchanga } from '../types';
import { Upload, FileText, Check, AlertCircle, RefreshCw, Eye } from 'lucide-react';

interface PanchangaUploadProps {
  onPanchangaExtracted: (extracted: Panchanga) => void;
  currentPanchanga: Panchanga | null;
}

export default function PanchangaUpload({ onPanchangaExtracted, currentPanchanga }: PanchangaUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewExtracted, setPreviewExtracted] = useState<Panchanga | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      if (selectedFile.type.startsWith('image/') || selectedFile.type === 'application/pdf' || selectedFile.type === 'text/plain') {
        setFile(selectedFile);
        setError(null);
      } else {
        setError('Unsupported file format. Please upload an image, text file, or PDF.');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result?.toString() || '';
        // Extract raw base64 data from Data URL
        const rawBase64 = base64String.split(',')[1];
        resolve(rawBase64);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleProcess = async () => {
    setIsUploading(true);
    setError(null);
    setPreviewExtracted(null);

    try {
      let payload: { text?: string; base64?: string; mimeType?: string } = {};

      if (file) {
        if (file.type.startsWith('image/')) {
          const base64 = await convertFileToBase64(file);
          payload = {
            base64,
            mimeType: file.type,
          };
        } else if (file.type === 'text/plain') {
          const text = await file.text();
          payload = { text };
        } else {
          // For pdf, we treat text extract if possible, or send base64
          const base64 = await convertFileToBase64(file);
          payload = {
            base64,
            mimeType: file.type,
          };
        }
      } else if (textInput.trim()) {
        payload = { text: textInput };
      } else {
        throw new Error('Please select a file or copy-paste Panchangam text first.');
      }

      const response = await fetch('/api/panchanga/extract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to process and extract Panchanga details using Gemini AI.');
      }

      const data = await response.json();
      if (data.panchanga) {
        setPreviewExtracted(data.panchanga);
      } else {
        throw new Error('Panchanga extraction response did not contain structured parameters.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during Gemini AI processing.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleApply = () => {
    if (previewExtracted) {
      onPanchangaExtracted(previewExtracted);
      // Reset preview state
      setPreviewExtracted(null);
      setFile(null);
      setTextInput('');
    }
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
      <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
        <Upload className="w-6 h-6 text-amber-700" id="panchanga-upload-icon" />
        <div>
          <h2 className="text-xl font-semibold text-stone-800 tracking-tight" id="panchanga-upload-heading">
            Authoritative Panchangam Image / Text Upload
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            Compare values from a scanned calendar sheet or digital panchangam text.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Column */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-stone-700">Choose Scanned Image or PDF</label>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-stone-300 hover:border-amber-500/50 rounded-xl p-8 text-center bg-white cursor-pointer hover:bg-stone-50/50 transition-all"
            onClick={() => document.getElementById('panchanga-file-input')?.click()}
          >
            <input
              id="panchanga-file-input"
              type="file"
              accept="image/*,application/pdf,text/plain"
              className="hidden"
              onChange={handleFileChange}
            />
            <Upload className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <p className="text-stone-700 font-medium text-sm">Drag and drop file here, or click to browse</p>
            <p className="text-stone-400 text-xs mt-1">Supports PNG, JPG, PDF, or TXT</p>
            {file && (
              <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-xs font-semibold text-amber-800">
                <FileText className="w-3.5 h-3.5" />
                {file.name}
              </div>
            )}
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-stone-200"></div>
            <span className="flex-shrink mx-4 text-xs text-stone-400 font-semibold uppercase tracking-wider">or</span>
            <div className="flex-grow border-t border-stone-200"></div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-stone-700">Paste Digital Calendar / Panchangam Text</label>
            <textarea
              rows={4}
              value={textInput}
              onChange={(e) => {
                setTextInput(e.target.value);
                if (e.target.value.trim()) setFile(null); // Clear file if text is typed
              }}
              placeholder="e.g., 2026 August 27, Thursday, Shravana Purnima, Dhanishtha Nakshatra, Shobhana Yoga, Bava Karana..."
              className="w-full bg-white border border-stone-300 rounded-lg py-2.5 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm font-mono placeholder:text-stone-400"
            />
          </div>

          <button
            type="button"
            disabled={isUploading || (!file && !textInput.trim())}
            onClick={handleProcess}
            className="flex items-center justify-center gap-2 w-full bg-stone-800 hover:bg-stone-900 text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Analyzing and Extracting with Gemini AI...
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Analyze and Match Sources
              </>
            )}
          </button>

          {error && (
            <div className="p-4 bg-rose-50 border border-rose-100 rounded-lg flex items-start gap-3 mt-4 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Extraction Error:</p>
                <p className="mt-1">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Preview Extracted Column */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 md:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">Gemini Extracted Source Matrix</h3>
            
            {previewExtracted ? (
              <div className="space-y-3">
                <div className="p-3 bg-amber-50/50 border border-amber-100 rounded-lg text-xs text-amber-900 leading-relaxed">
                  <strong className="font-semibold text-sm block mb-1">Verify Mapped Parameters below:</strong>
                  The parameters below were read and normalized into the structured Panchanga schema using gemini-3.7-flash.
                </div>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-stone-700 border-t border-stone-100 pt-3">
                  <div><strong>Samvatsara:</strong> <span className="font-mono">{previewExtracted.samvatsara}</span></div>
                  <div><strong>Ayana:</strong> <span className="font-mono">{previewExtracted.ayana}</span></div>
                  <div><strong>Ritu:</strong> <span className="font-mono">{previewExtracted.ritu}</span></div>
                  <div><strong>Masa:</strong> <span className="font-mono">{previewExtracted.masa}</span></div>
                  <div><strong>Paksha:</strong> <span className="font-mono">{previewExtracted.paksha}</span></div>
                  <div><strong>Tithi:</strong> <span className="font-mono">{previewExtracted.tithi}</span></div>
                  <div><strong>Vara:</strong> <span className="font-mono">{previewExtracted.vara}</span></div>
                  <div><strong>Nakshatra:</strong> <span className="font-mono">{previewExtracted.nakshatra}</span></div>
                  <div><strong>Yoga:</strong> <span className="font-mono">{previewExtracted.yoga}</span></div>
                  <div><strong>Karana:</strong> <span className="font-mono">{previewExtracted.karana}</span></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <FileText className="w-12 h-12 text-stone-300 mb-2" />
                <p className="text-stone-500 font-medium text-sm">No Extracted Preview</p>
                <p className="text-stone-400 text-xs mt-1 max-w-xs leading-relaxed">
                  Upload an image or paste Panchanga calendar text on the left and click &quot;Analyze&quot; to inspect Gemini extracted data.
                </p>
              </div>
            )}
          </div>

          {previewExtracted && (
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setPreviewExtracted(null)}
                className="w-full sm:w-1/2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-2.5 px-4 rounded-lg text-sm transition-all"
              >
                Discard
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="w-full sm:w-1/2 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Apply as Source
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
