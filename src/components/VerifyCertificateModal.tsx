import React, { useState } from 'react';

interface VerifyCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CertificateRecord {
  id: string;
  studentName: string;
  fatherName: string;
  program: string;
  grade: string;
  completionDate: string;
  campus: string;
  navttcRegNo: string;
  credentialUrl: string;
}

const SAMPLE_RECORDS: Record<string, CertificateRecord> = {
  'NX-2025-8841': {
    id: 'NX-2025-8841',
    studentName: 'Hamza Tariq',
    fatherName: 'Muhammad Tariq',
    program: 'Full Stack Artificial Intelligence Micro-Degree',
    grade: 'A+ (Distinction)',
    completionDate: 'December 18, 2025',
    campus: 'Arfa Software Technology Park, Lahore',
    navttcRegNo: 'NAVTTC/PK-LHR/2025/9981',
    credentialUrl: 'https://verify.nexskill.com/NX-2025-8841'
  },
  'NX-2025-9102': {
    id: 'NX-2025-9102',
    studentName: 'Ayesha Farooq',
    fatherName: 'Farooq Ahmad',
    program: 'Advance UI/UX Designing with AI & Figma',
    grade: 'A+ (High Honors)',
    completionDate: 'November 24, 2025',
    campus: '14 Babar Block, Garden Town, Lahore',
    navttcRegNo: 'NAVTTC/PK-LHR/2025/8422',
    credentialUrl: 'https://verify.nexskill.com/NX-2025-9102'
  },
  'NX-2025-7419': {
    id: 'NX-2025-7419',
    studentName: 'Zain Bilal',
    fatherName: 'Bilal Hussain',
    program: 'Advanced Cyber Security & Penetration Testing',
    grade: 'A (First Class)',
    completionDate: 'January 10, 2026',
    campus: 'PARSA Tower, Shahrah-e-Faisal, Karachi',
    navttcRegNo: 'NAVTTC/PK-KHI/2026/3041',
    credentialUrl: 'https://verify.nexskill.com/NX-2025-7419'
  }
};

export const VerifyCertificateModal: React.FC<VerifyCertificateModalProps> = ({
  isOpen,
  onClose
}) => {
  const [certInput, setCertInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [record, setRecord] = useState<CertificateRecord | null>(null);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = certInput.trim().toUpperCase();
    setSearched(true);
    if (SAMPLE_RECORDS[cleanId]) {
      setRecord(SAMPLE_RECORDS[cleanId]);
    } else {
      // Mock generated verified record for demonstration
      setRecord({
        id: cleanId,
        studentName: 'Muhammad Salman',
        fatherName: 'Abdul Rehman',
        program: 'Software Engineering with AI (Full Stack MERN)',
        grade: 'A (First Class)',
        completionDate: 'January 28, 2026',
        campus: 'Arfa Software Technology Park, Lahore',
        navttcRegNo: `NAVTTC/PK-VERIFIED/${Math.floor(1000 + Math.random() * 9000)}`,
        credentialUrl: `https://verify.nexskill.com/${cleanId}`
      });
    }
  };

  const handleQuickLoad = (id: string) => {
    setCertInput(id);
    setSearched(true);
    setRecord(SAMPLE_RECORDS[id]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-surface-container-low px-6 py-4 flex items-center justify-between border-b border-surface-container">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-xl">verified</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Verify Student Credential
              </h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Official NAVTTC &amp; NexSkill Academic Registry
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container text-secondary hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleVerify} className="space-y-3">
            <label className="block font-label-sm text-label-sm text-on-surface font-semibold">
              Enter Certificate ID or Roll Number
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                required
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="e.g. NX-2025-8841"
                className="flex-1 px-4 py-2.5 rounded-lg bg-surface font-mono font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container uppercase placeholder:font-sans placeholder:normal-case"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">search</span>
                Verify Now
              </button>
            </div>

            {/* Quick Sample Links */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-secondary font-medium">Try Sample Verified Records:</span>
              <button
                type="button"
                onClick={() => handleQuickLoad('NX-2025-8841')}
                className="text-xs px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-mono font-semibold cursor-pointer"
              >
                NX-2025-8841 (AI)
              </button>
              <button
                type="button"
                onClick={() => handleQuickLoad('NX-2025-9102')}
                className="text-xs px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-mono font-semibold cursor-pointer"
              >
                NX-2025-9102 (UI/UX)
              </button>
              <button
                type="button"
                onClick={() => handleQuickLoad('NX-2025-7419')}
                className="text-xs px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-mono font-semibold cursor-pointer"
              >
                NX-2025-7419 (Cyber)
              </button>
            </div>
          </form>

          {searched && record && (
            <div className="p-6 rounded-2xl bg-surface-container-low border-2 border-tertiary/30 animate-in fade-in-50 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-2xl">verified</span>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-tertiary">
                      Official Government Verified Credential
                    </span>
                    <div className="text-xs text-secondary">
                      Registry ID: {record.id} • NAVTTC Reg: {record.navttcRegNo}
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm font-bold">
                  AUTHENTIC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm text-secondary">
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Graduate Name:</span>
                  <span className="font-bold text-on-surface text-base">{record.studentName}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Father&apos;s Name:</span>
                  <span>{record.fatherName}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-[11px] font-bold text-on-surface">Completed Program:</span>
                  <span className="font-semibold text-primary">{record.program}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Academic Grade:</span>
                  <span className="font-bold text-tertiary">{record.grade}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Date of Issuance:</span>
                  <span>{record.completionDate}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-[11px] font-bold text-on-surface">Campus &amp; Practical Lab:</span>
                  <span>{record.campus}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-surface-container flex flex-wrap items-center justify-between gap-3 text-xs text-secondary">
                <span>Issued by NexSkill Examination &amp; NAVTTC Verification Directorate</span>
                <button
                  onClick={() => alert(`Certificate verification link copied: ${record.credentialUrl}`)}
                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">link</span>
                  Copy Verification Link
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
