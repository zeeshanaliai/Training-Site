import React, { useState } from 'react';

interface StudentLmsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentLmsModal: React.FC<StudentLmsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'lectures' | 'sandbox' | 'attendance' | 'trainer'>('lectures');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-inverse-surface text-inverse-on-surface px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-bold font-headline-md">
              N
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                  NexSkill LMS Portal
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-bold">
                  v4.2 Mobile &amp; Web
                </span>
              </div>
              <p className="text-xs text-inverse-on-surface/80">
                Powered by P2P Clouds • Student: Muhammad Usman (Roll: NX-2026-B812)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container-high/20 text-inverse-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Tab navigation */}
        <div className="bg-surface-container-low px-6 border-b border-surface-container flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('lectures')}
            className={`py-3 px-3.5 font-label-md text-label-md border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'lectures'
                ? 'border-primary-container text-primary-container'
                : 'border-transparent text-secondary hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            Lecture Recordings
          </button>
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`py-3 px-3.5 font-label-md text-label-md border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'sandbox'
                ? 'border-primary-container text-primary-container'
                : 'border-transparent text-secondary hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            GPU Sandbox &amp; Code
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`py-3 px-3.5 font-label-md text-label-md border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'attendance'
                ? 'border-primary-container text-primary-container'
                : 'border-transparent text-secondary hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">event_available</span>
            Attendance &amp; Quizzes
          </button>
          <button
            onClick={() => setActiveTab('trainer')}
            className={`py-3 px-3.5 font-label-md text-label-md border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'trainer'
                ? 'border-primary-container text-primary-container'
                : 'border-transparent text-secondary hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            1-on-1 Mentor Desk
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'lectures' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-primary uppercase">Currently Enrolled Program</span>
                  <h4 className="font-headline-sm font-bold text-on-surface">
                    Full Stack Artificial Intelligence Micro-Degree (Spring 2026)
                  </h4>
                  <p className="text-xs text-secondary mt-1">
                    Arfa Tower Lab 3 • Instructor: Engr. M. Kashif (Lead AI Architect)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold text-xs">
                    Progress: 68% Completed
                  </span>
                </div>
              </div>

              <h4 className="font-headline-sm text-sm font-bold text-on-surface">Recent HD Lab Recordings:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-surface-container hover:border-primary-container transition-colors">
                  <div className="flex items-center justify-between text-xs text-secondary mb-1">
                    <span className="font-bold text-on-surface">Module 14: Agentic Workflows with LangGraph</span>
                    <span>1h 45m</span>
                  </div>
                  <p className="text-xs text-secondary line-clamp-2">
                    Multi-agent state machines, router patterns, tools calling loop, and vector search evaluation.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-tertiary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">download_done</span> Available Offline
                    </span>
                    <button
                      onClick={() => alert('Streaming Lecture 14 recording in 1080p from NexSkill CDN...')}
                      className="px-3 py-1 rounded bg-primary-container text-on-primary-container text-xs font-bold hover:bg-primary cursor-pointer flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">play_arrow</span> Watch
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-surface-container hover:border-primary-container transition-colors">
                  <div className="flex items-center justify-between text-xs text-secondary mb-1">
                    <span className="font-bold text-on-surface">Module 13: RAG with Hybrid Dense &amp; Sparse Search</span>
                    <span>2h 10m</span>
                  </div>
                  <p className="text-xs text-secondary line-clamp-2">
                    BM25 indexing combined with Pinecone vectors and cross-encoder re-ranking pipelines.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-tertiary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">download_done</span> Available Offline
                    </span>
                    <button
                      onClick={() => alert('Streaming Lecture 13 recording in 1080p from NexSkill CDN...')}
                      className="px-3 py-1 rounded bg-primary-container text-on-primary-container text-xs font-bold hover:bg-primary cursor-pointer flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">play_arrow</span> Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sandbox' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-inverse-surface text-inverse-on-surface font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-surface-container-highest/20 pb-2 text-secondary-fixed-dim">
                  <span>nexskill-cloud-gpu-node-04 // PyTorch 2.4 + CUDA 12.4</span>
                  <span className="text-tertiary-fixed font-bold">● GPU READY</span>
                </div>
                <div className="text-tertiary-fixed-dim">
                  $ python -c &quot;import torch; print(&apos;CUDA device:&apos;, torch.cuda.get_device_name(0))&quot;
                </div>
                <div className="text-white">
                  &gt; CUDA device: NVIDIA RTX 4090 24GB VRAM
                </div>
                <div className="text-secondary-fixed-dim pt-2">
                  $ uv run app.py --port 8000 --model llama-3.3-8b-instruct
                </div>
                <div className="text-emerald-400">
                  Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
                </div>
              </div>
              <p className="text-xs text-secondary">
                ⚡ NexSkill students receive complimentary remote access to dedicated high-speed GPU training rigs without credit card or cloud compute billing.
              </p>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-surface-container-low text-center">
                  <span className="text-xs text-secondary block font-semibold">Total Classes</span>
                  <span className="font-headline-sm font-bold text-on-surface">36 / 48</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low text-center">
                  <span className="text-xs text-secondary block font-semibold">Verified Attendance</span>
                  <span className="font-headline-sm font-bold text-tertiary">94.4%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low text-center">
                  <span className="text-xs text-secondary block font-semibold">Quiz Average</span>
                  <span className="font-headline-sm font-bold text-primary">89.2% (Grade A)</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Student is currently eligible for NAVTTC Certification &amp; NexTalent Direct Interview Pool.
              </div>
            </div>
          )}

          {activeTab === 'trainer' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                    MK
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface text-sm">Engr. Muhammad Kashif</h5>
                    <p className="text-xs text-secondary">Assigned Senior Lab Mentor (Arfa Tower)</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold">
                  Online Now
                </span>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface">
                  Send Question to Lab Mentor:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask about assignment 4, PyTorch tensor dimensions, or Docker config..."
                    className="flex-1 px-3 py-2 rounded-lg bg-surface text-xs text-on-surface border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary-container"
                  />
                  <button
                    onClick={() => alert('Message transmitted to Lab Mentor! Expected response within 15 minutes.')}
                    className="px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container text-xs font-bold cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Mobile App Download Callout */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">android</span>
            <span>Download the NexSkill LMS App for Android &amp; iOS</span>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.p2pclouds.nexskill_lms"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-semibold hover:bg-surface-container-highest hover:text-on-surface transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">install_mobile</span>
            Google Play Download
          </a>
        </div>
      </div>
    </div>
  );
};
