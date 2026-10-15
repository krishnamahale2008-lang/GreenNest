import React from 'react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { Sprout, Home, Sun, BookOpen, Droplets, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar currentPath="/404" />

      <main id="main-content" className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-emerald-100 shadow-xl">
          {/* Friendly Illustration / Icon */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
            <Compass className="w-10 h-10 animate-spin [animation-duration:8s]" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Page Not Found • 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-950">
              This Balcony Path Doesn’t Exist
            </h1>
            <p className="text-stone-600 text-base max-w-md mx-auto leading-relaxed">
              Looks like this plant pot got moved or the page link was trimmed. Don’t worry, your balcony garden journey is just one click away.
            </p>
          </div>

          {/* Direct Navigation Links to Main Pages */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Explore Our Main Balcony Gardening Pages:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <a
                href="/"
                className="p-4 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-stone-900 group-hover:text-emerald-800">
                    GreenNest Homepage
                  </span>
                  <span className="text-xs text-stone-500">Balcony garden ideas India</span>
                </div>
              </a>

              <a
                href="/best-balcony-plants-india"
                className="p-4 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-stone-900 group-hover:text-emerald-800">
                    Best Balcony Plants
                  </span>
                  <span className="text-xs text-stone-500">10 heat-hardy Indian species</span>
                </div>
              </a>

              <a
                href="/start-balcony-garden"
                className="p-4 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-stone-900 group-hover:text-emerald-800">
                    Start Balcony Garden
                  </span>
                  <span className="text-xs text-stone-500">Beginner soil &amp; pot guide</span>
                </div>
              </a>

              <a
                href="/water-plants-while-away"
                className="p-4 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-stone-900 group-hover:text-emerald-800">
                    Vacation Plant Care
                  </span>
                  <span className="text-xs text-stone-500">5 automated watering systems</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
