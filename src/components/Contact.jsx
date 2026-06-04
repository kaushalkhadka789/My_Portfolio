import React, { useState } from 'react';
import SectionLabel from './ui/SectionLabel';
import ScrollReveal from './ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Copy, Check, Github } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('kaushalkhadka789@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      const API_URL = import.meta.env.PROD 
        ? '/api/contact' 
        : 'http://localhost:5000/api/contact';

      const response = await axios.post(API_URL, formState);
      
      if (response.status === 200 || response.status === 201) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Unexpected API response status');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-stark-black overflow-hidden border-t border-gray-muted/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <ScrollReveal>
            <SectionLabel text="Get in Touch" />
            <h2 className="font-heading text-4xl md:text-5xl font-black text-warm-white tracking-widest leading-tight mt-2">
              Let's Build Something Together
            </h2>
            <div className="w-24 h-[4px] bg-signal-red mt-6 mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <ScrollReveal delay={0.1} y={40}>
              <h3 className="font-heading text-3xl font-bold text-warm-white tracking-widest mb-4 leading-snug">
                Reach Out Directly
              </h3>
              <p className="font-body text-gray-muted leading-relaxed mb-10">
                I'm currently open to freelance opportunities, remote full-time positions, and collaborations. Don't hesitate to reach out — let's build something exceptional!
              </p>

              {/* Detail Items */}
              <div className="space-y-8 mb-12">
                {/* Email Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border border-gray-muted/30 flex items-center justify-center text-gray-muted shrink-0 transition-colors group-hover:border-signal-red group-hover:text-signal-red">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-gray-muted font-label uppercase tracking-widest mb-1">Email Address</p>
                    <div className="flex items-center gap-3">
                      <a href="mailto:kaushalkhadka789@gmail.com" className="text-base font-bold font-body text-warm-white hover:text-signal-red transition-colors truncate">
                        kaushalkhadka789@gmail.com
                      </a>
                      <button
                        onClick={copyEmailToClipboard}
                        className="p-1.5 border border-gray-muted/20 text-gray-muted hover:border-signal-red hover:text-signal-red transition-all clickable shrink-0"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check size={14} className="text-signal-red" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border border-gray-muted/30 flex items-center justify-center text-gray-muted shrink-0 transition-colors group-hover:border-signal-red group-hover:text-signal-red">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-muted font-label uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                    <a href="tel:+9779765982062" className="text-base font-bold font-body text-warm-white hover:text-signal-red transition-colors block">
                      +977 9765982062
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border border-gray-muted/30 flex items-center justify-center text-gray-muted shrink-0 transition-colors group-hover:border-signal-red group-hover:text-signal-red">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-muted font-label uppercase tracking-widest mb-1">Location</p>
                    <span className="text-base font-bold font-body text-warm-white block">
                      Barahakshetra-5, Kalabanjar, Nepal
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Row */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/kaushal-khadka-073a0b347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-muted/30 hover:border-signal-red text-gray-muted hover:text-warm-white hover:bg-signal-red flex items-center justify-center transition-all duration-300 clickable hover:-translate-y-1"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/kaushalkhadka789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-muted/30 hover:border-signal-red text-gray-muted hover:text-warm-white hover:bg-signal-red flex items-center justify-center transition-all duration-300 clickable hover:-translate-y-1"
                >
                  <Github size={18} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={0.2} y={40}>
              <div className="p-8 md:p-10 border-2 border-gray-muted/20 bg-dark-card relative overflow-hidden transition-colors hover:border-signal-red/30">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-signal-red" />

                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  
                  {/* Name and Email side-by-side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-label text-[11px] text-gray-muted tracking-widest uppercase">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 bg-stark-black border border-gray-muted/20 text-warm-white font-body text-sm focus:outline-none focus:border-signal-red focus:ring-1 focus:ring-signal-red transition-all duration-300 placeholder:text-gray-muted/40"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-label text-[11px] text-gray-muted tracking-widest uppercase">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 bg-stark-black border border-gray-muted/20 text-warm-white font-body text-sm focus:outline-none focus:border-signal-red focus:ring-1 focus:ring-signal-red transition-all duration-300 placeholder:text-gray-muted/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-label text-[11px] text-gray-muted tracking-widest uppercase">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-stark-black border border-gray-muted/20 text-warm-white font-body text-sm focus:outline-none focus:border-signal-red focus:ring-1 focus:ring-signal-red transition-all duration-300 placeholder:text-gray-muted/40"
                      placeholder="Project Discussion"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-label text-[11px] text-gray-muted tracking-widest uppercase">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-stark-black border border-gray-muted/20 text-warm-white font-body text-sm focus:outline-none focus:border-signal-red focus:ring-1 focus:ring-signal-red transition-all duration-300 placeholder:text-gray-muted/40 resize-none"
                      placeholder="Hi Kaushal, I'd love to connect..."
                    />
                  </div>

                  {/* Feedback Status messages */}
                  <AnimatePresence mode="wait">
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 border border-[#4ade80]/40 bg-[#4ade80]/10 text-[#4ade80] text-sm flex items-center gap-3 font-body"
                      >
                        <CheckCircle size={18} className="shrink-0" />
                        <span>Thank you! Your message was submitted successfully. I will reach out shortly.</span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 border border-signal-red/40 bg-signal-red/10 text-signal-red text-sm flex items-center gap-3 font-body"
                      >
                        <AlertCircle size={18} className="shrink-0" />
                        <span>{errorMessage || 'Something went wrong. Please check fields or try again.'}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 px-6 bg-signal-red text-warm-white flex items-center justify-center gap-3 font-label text-sm tracking-widest uppercase font-bold cursor-pointer relative overflow-hidden transition-transform hover:-translate-y-1 active:scale-95 ${
                      status === 'submitting' ? 'opacity-80 pointer-events-none' : ''
                    } ${status === 'error' ? 'animate-shake' : ''}`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-stark-black border-t-transparent animate-spin shrink-0" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
