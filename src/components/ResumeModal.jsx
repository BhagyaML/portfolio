import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Code2,
  Award,
  CheckCircle2
} from 'lucide-react';
import {
  personalInfo,
  educationData,
  experienceData,
  projectsData,
  skillsData,
  certificationsData
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `=====================================================
THIRUNAM BHAGYASRI
Computer Science & Engineering Graduate | Software Developer
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}
=====================================================

CAREER OBJECTIVE:
${personalInfo.tagline}

EDUCATION:
1. ${educationData[0].degree}
   ${educationData[0].institution} (${educationData[0].duration})
   Score: ${educationData[0].score}
2. ${educationData[1].degree}
   ${educationData[1].institution} (${educationData[1].duration})
   Score: ${educationData[1].score}
3. ${educationData[2].degree}
   ${educationData[2].institution} (${educationData[2].duration})
   Score: ${educationData[2].score}

WORK EXPERIENCE / INTERNSHIP:
${experienceData[0].role} - ${experienceData[0].project}
${experienceData[0].company} (${experienceData[0].duration})
- ${experienceData[0].responsibilities.join('\n- ')}

FEATURED PROJECTS:
1. ${projectsData[0].title}
   Tech: ${projectsData[0].techStack.join(', ')}
   - ${projectsData[0].highlights.join('\n   - ')}
2. ${projectsData[1].title}
   Tech: ${projectsData[1].techStack.join(', ')}
   - ${projectsData[1].highlights.join('\n   - ')}

TECHNICAL SKILLS:
- Languages: Python, Java
- Web & Databases: HTML5, CSS3, JavaScript, MySQL
- Core Concepts: OOP, DBMS, Data Structures, Basic Machine Learning
- Tools & Platforms: Git, GitHub, Linux, Eclipse IDE, Microsoft Office Suite
- Soft Skills: Communication, Teamwork & Collaboration, Time Management, Problem Solving

CERTIFICATIONS:
${certificationsData.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Thirunam_Bhagyasri_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 print:max-h-none print:shadow-none print:border-none print:w-full print:rounded-none"
        >
          {/* Modal Sticky Toolbar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 print:hidden">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-800 dark:text-white">
                Resume Preview • Thirunam Bhagyasri
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>

              <button
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                title="Download text format"
              >
                <Download className="w-3.5 h-3.5 text-cyan-500" />
                Download Text
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Sheet */}
          <div className="p-8 sm:p-12 text-slate-800 dark:text-slate-200 print:text-black print:p-0">
            
            {/* Resume Header */}
            <div className="border-b border-slate-300 dark:border-slate-700 pb-6 mb-6 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white print:text-black">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold text-violet-600 dark:text-violet-400 print:text-slate-700 mt-1">
                {personalInfo.title}
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-600 dark:text-slate-400 print:text-slate-600">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-violet-500" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {personalInfo.location}
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-violet-600 dark:hover:text-violet-400"
                >
                  GitHub: github.com/BhagyaML
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-violet-600 dark:hover:text-violet-400"
                >
                  LinkedIn: linkedin.com/in/thirunam-bhagyasri-028183373
                </a>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white print:text-black">
                        {edu.degree}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-violet-600 dark:text-violet-400 print:text-black">
                        {edu.score}
                      </span>
                      <p className="text-[11px] text-slate-500">{edu.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Internship Experience
              </h2>
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white print:text-black">
                        {exp.role} – {exp.project}
                      </p>
                      <p className="text-violet-600 dark:text-violet-400 font-semibold print:text-slate-700">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-1">
                    {exp.responsibilities.slice(0, 4).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Projects */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Key Engineering Projects
              </h2>
              <div className="space-y-4">
                {projectsData.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                        {proj.title}
                      </p>
                      <span className="text-[11px] text-slate-500">{proj.period}</span>
                    </div>
                    <p className="text-[11px] text-violet-600 dark:text-violet-400 font-medium">
                      Technologies: {proj.techStack.join(', ')}
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-0.5">
                      {proj.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Technical Skills & Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">Languages:</strong> Python, Java
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">Web & Databases:</strong> HTML5, CSS3, JavaScript, MySQL, JDBC
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">Core Concepts:</strong> OOP, DBMS, Data Structures, Machine Learning
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">Tools:</strong> Git, GitHub, Linux, Eclipse IDE, MS Office Suite
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-slate-900 dark:text-white print:text-black">Soft Skills:</strong> Technical Communication, Teamwork & Collaboration, Time Management, Problem Solving
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Certifications
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                {certificationsData.map((c) => (
                  <div key={c.id} className="flex justify-between items-center">
                    <span>• <strong>{c.title}</strong> — {c.issuer}</span>
                    <span className="text-[11px] text-slate-500">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
