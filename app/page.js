'use client';

import { useState } from 'react';
import Form from './components/Form';
import Accordion from './components/Accordion';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Don't setShowAccordion here - it will be controlled by Form component
  };

  const handleFormClear = () => {
    setFormSubmitted(false);
    setShowAccordion(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col app-root">
      {/* Header */}
      <header
        className="sticky top-0 z-100 bg-white site-header"
        style={{ padding: '.875rem 2rem', borderBottom: '1px solid #bdc1c3' }}
      >
        <div className="flex items-center justify-between w-full header-content">
          <div className="logo" role="img" aria-label="VFS logo" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 main-content">
        {/* Left Side - Form */}
        <div className="w-1/2 p-8 border-r border-gray-200 left-col">
          <Form 
            onSubmit={handleFormSubmit} 
            onClear={handleFormClear} 
            setShowContent={setShowAccordion}
          />
        </div>

        {/* Right Side - Accordion */}
        <div className="w-1/2 p-8 right-col">
          <Accordion showContent={showAccordion} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white site-footer">
        {/* New Customer Message */}
        <div className="px-8 py-8 footer-message">
          <p style={{ color: '#3C4043' }} className="text-sm px-8 pt-16 mb-2">
            New customer? Please visit <a href="#" className="text-[#D1470B] underline font-medium">UK Visas and Immigration</a> to complete 
          </p>
          <p style={{ color: '#3C4043' }} className="text-sm px-8 pb-8">
            your application, before returning to VFS Global to book your appointment
          </p>
        </div>

        {/* Footer Links and Copyright */}
        <div className="px-8 pt-6 pb-8 footer-inner border-t border-gray-300">
          {/* Links */}
          <div className="flex flex-wrap gap-6 mb-8 footer-links">
            <a href="#" style={{ color: '#031B30' }} className="text-sm underline">About VFS Global</a>
            <a href="#" style={{ color: '#031B30' }} className="text-sm underline">Contact us</a>
            <a href="#" style={{ color: '#031B30' }} className="text-sm underline">FAQ</a>
          </div>
          <div className="flex flex-wrap gap-6 mb-8 footer-links">
            <a href="#" style={{ color: '#62707C' }} className="text-sm underline">Terms & Conditions</a>
            <a href="#" style={{ color: '#62707C' }} className="text-sm underline">Cookie Policy</a>
            <a href="#" style={{ color: '#62707C' }} className="text-sm underline">Privacy Policy</a>
            <a href="#" style={{ color: '#62707C' }} className="text-sm underline">Accessibility Statement</a>
            <a href="#" style={{ color: '#62707C' }} className="text-sm underline">Report a vulnerability</a>
          </div>

          {/* Copyright */}
          <div style={{ color: '#5F6368' }} className="font-normal footer-copy">
            <p className="mb-1 text-xs">© 2026 VFS Global Group. All rights reserved. ISO 23026 compliant information. Our websites are created for viewing on the latest browsers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}