import React from 'react';
import { Sprout, Sun, Droplets, BookOpen, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-emerald-950">
                <Sprout className="w-5 h-5 font-bold" />
              </div>
              <span className="text-2xl font-serif font-black text-white tracking-tight">
                Green<span className="text-emerald-400">Nest</span>
              </span>
            </div>
            <p className="text-emerald-200/80 text-sm leading-relaxed">
              Empowering Indian city dwellers to turn compact balconies and window sills into lush, thriving green sanctuaries with practical, climate-tested advice.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Tailored for Delhi, Mumbai, Bengaluru, Pune, Hyderabad &amp; Chennai flats.
            </div>
          </div>

          {/* Practical Gardening Guides */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase font-sans mb-4 border-b border-emerald-800 pb-2">
              Balcony Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/best-balcony-plants-india"
                  className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Sun className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10 Best Balcony Plants for Indian Climates</span>
                </a>
              </li>
              <li>
                <a
                  href="/start-balcony-garden"
                  className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Step-by-Step Beginner Balcony Setup Guide</span>
                </a>
              </li>
              <li>
                <a
                  href="/water-plants-while-away"
                  className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Droplets className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vacation Plant Care: 5 Passive Watering Tips</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>GreenNest Balcony Gardening Homepage</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Key Advice Pillars */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase font-sans mb-4 border-b border-emerald-800 pb-2">
              Indian Climate Care
            </h3>
            <ul className="space-y-2 text-xs text-emerald-200/80 leading-relaxed">
              <li>
                <strong className="text-emerald-300">Summer Heatwaves (40°C+):</strong> Group pots in corners and drape 50% green agro-shade netting over railings.
              </li>
              <li>
                <strong className="text-emerald-300">Monsoon Drainage:</strong> Unclog pot drainage holes and empty saucers every 24 hours to prevent mosquito breeding.
              </li>
              <li>
                <strong className="text-emerald-300">Balcony Slab Safety:</strong> Use featherweight cocopeat mixes rather than dense mud to respect building floor load limits.
              </li>
            </ul>
          </div>

          {/* Quick Technical & Trust Meta */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase font-sans mb-4 border-b border-emerald-800 pb-2">
              Website Standards
            </h3>
            <p className="text-emerald-200/80 text-xs leading-relaxed mb-3">
              Fast, static pre-rendered pages with clean SEO markup, accessible contrast, and zero external script bloat.
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-emerald-300">
              <a href="/sitemap.xml" className="hover:underline text-emerald-400">
                View XML Sitemap
              </a>
              <a href="/robots.txt" className="hover:underline text-emerald-400">
                View Robots.txt Directives
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/80 gap-4">
          <p>© 2026 GreenNest. All rights reserved. Urban balcony gardening for Indian homes.</p>
          <p className="flex items-center gap-1">
            Grown with love for greener Indian apartment communities.
          </p>
        </div>
      </div>
    </footer>
  );
};
