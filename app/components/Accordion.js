'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Accordion({ showContent }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  // Two accordion panels; each panel contains steps
  const items = [
    {
      id: 'application',
      title: 'Track Application',
      decision: 'Application submitted to UKVI',
      steps: [
        { id: 's1', label: 'Application submitted to UKVI', done: true },
        { id: 's2', label: 'Decision received from UKVI', done: true },
        { id: 's3', label: 'Passport is ready for collection or courier', done: true },
        { id: 's4', label: 'Passport delivered', done: false },
      ],
    },
    {
      id: 'passport',
      title: 'Track Passport',
      decision: 'Passport: Awaiting collection by customer',
      steps: [
        { id: 'p1', label: 'Passport: Stored security in VCAS Centre', done: true },
        { id: 'p2', label: 'Passport: Returned to customer (KMPWA)', done: true },
        { id: 'p3', label: 'Passport: Awaiting receipt from customer', done: true },
        { id: 'p4', label: 'Passport: Awaiting collection by customer (05 March 2026)', done: true },
        { id: 'p5', label: 'Passport: Collected by customer', done: false },
        { id: 'p6', label: 'Passport: Dispatched to customer by courier', done: false },
      ],
    },
  ];

  // Fix ESLint warning: use setTimeout for all state updates in useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showContent) {
        setExpandedItem('application');
      } else {
        setExpandedItem(null);
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, [showContent]);

  return (
    <div className="w-full space-y-0" id="accordion">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-300 rounded-b-sm overflow-hidden">
          <button
            type="button"
            onClick={() => toggleAccordion(item.id)}
            className="w-full px-2 py-2 bg-gray-100 text-[#3C4043] text-left font-medium transition flex justify-between items-center"
          >
            <span>{item.title}</span>
            <Image
              src="/drop.png"
              alt="dropdown"
              width={20}
              height={20}
              className={`transform transition ${expandedItem === item.id ? 'rotate-180' : ''}`}
            />
          </button>
          {/* Content only shows when expanded AND showContent is true */}
          {expandedItem === item.id && showContent && (
            <div className="px-4 py-3 bg-white border-t border-gray-300">
              <div className="timeline">
                <p className="text-[#D1470B] font-normal">{item.decision}</p>
                {item.steps.map((step) => (
                  <div key={step.id} className="timeline-item">
                    <div className="timeline-icon">
                      {step.done ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <circle cx="12" cy="12" r="10" fill="#2db35e" />
                          <path d="M7 12.5l2.5 2.5L17 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <circle cx="12" cy="12" r="10" stroke="#9AA0A6" strokeWidth="1.5" fill="transparent" />
                        </svg>
                      )}
                    </div>
                    <div className="timeline-label">{step.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
