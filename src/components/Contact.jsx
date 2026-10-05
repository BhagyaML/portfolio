import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: `Copied ${type === 'email' ? 'Email' : 'Phone'} to clipboard!`,
      });
    }
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a message subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });

      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: 'Thank you! Your message was sent successfully.',
        });
      }
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 transition-colors"
            style={{
              backgroundColor: 'rgba(var(--theme-primary-rgb), 0.12)',
              color: 'var(--theme-primary)',
              border: '1px solid rgba(var(--theme-primary-rgb), 0.25)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have an opportunity, project, or technical question? Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Quick Copy (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/85 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Channels
              </h3>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-750/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Direct Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-600 truncate block font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-violet-600 shadow-sm transition-colors shrink-0"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-750/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Phone & WhatsApp</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-600 truncate block font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <a
                    href="https://wa.me/918121305330"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 transition-colors"
                    title="Open WhatsApp Chat"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-600 shadow-sm transition-colors"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-750/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-slate-400 mb-3">
                  Online Profiles & Repositories
                </p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all hover:scale-[1.02]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all hover:scale-[1.02]"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-500" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Ready for Immediate Deployment
              </div>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                Interested in Software Engineer, Junior Developer, or Machine Learning roles. Open to relocation and hybrid/remote work.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/85 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below. I will respond to your inquiry promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Received!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <strong>{formData.name}</strong>. I have received your message regarding "{formData.subject}" and will get back to you shortly at <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:border-violet-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:border-violet-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:border-violet-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Bhagyasri, I came across your profile and would love to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:border-[var(--theme-primary)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                      style={{
                        background: 'var(--theme-btn-gradient)',
                        boxShadow: '0 4px 14px 0 var(--theme-glow)',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message || '')}`}
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-[var(--theme-primary)] transition-colors"
                    >
                      Or open in your email client &rarr;
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
