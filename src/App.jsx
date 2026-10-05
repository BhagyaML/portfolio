import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';
import ResumeModal from './components/ResumeModal';
import ParticleBackground from './components/ParticleBackground';
import Toast from './components/Toast';
import FloatingThemeDock from './components/FloatingThemeDock';
import { projectsData } from './data/portfolioData';

export default function App() {
  // Modal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [selectedCertId, setSelectedCertId] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Toast state
  const [toast, setToast] = useState(null);

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleOpenCertificate = (certId) => {
    setSelectedCertId(certId);
    setIsCertModalOpen(true);
  };

  const handleOpenProjectById = (projId) => {
    const proj = projectsData.find((p) => p.id === projId);
    if (proj) {
      setSelectedProject(proj);
      setIsProjectModalOpen(true);
    }
  };

  return (
    <div
      className="min-h-screen text-slate-800 dark:text-slate-100 selection:bg-[var(--theme-primary)] selection:text-white relative transition-colors duration-500"
      style={{ backgroundColor: 'var(--theme-bg-main)' }}
    >
      {/* Interactive Realistic Particle Physics Background responding to 3 themes */}
      <ParticleBackground />

      {/* Navbar with 3 Themes Selector & Quick Actions */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onShowToast={showToast}
        />
        
        <About />

        <Skills />

        <Experience
          onOpenCertificate={handleOpenCertificate}
          onOpenProject={handleOpenProjectById}
        />

        <Projects
          onSelectProject={(proj) => {
            setSelectedProject(proj);
            setIsProjectModalOpen(true);
          }}
        />

        <Education
          onOpenCertificate={handleOpenCertificate}
        />

        <Contact
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Theme Quick-Switch Dock (Bottom-Right) */}
      <FloatingThemeDock />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

      <CertificateModal
        certId={selectedCertId}
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Global Toast Feedback */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
