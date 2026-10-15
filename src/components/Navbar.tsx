import React, { useState } from 'react';
import { Sprout, Menu, X, Sun, BookOpen, Droplets, Home } from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath: propPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = propPath || (typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') || '/' : '/');

  const navLinks = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      title: 'GreenNest Balcony Gardening Homepage'
    },
    {
      href: '/best-balcony-plants-india',
      label: 'Best Balcony Plants',
      icon: Sun,
      title: 'Best Balcony Plants for Indian Climates'
    },
    {
      href: '/start-balcony-garden',
      label: 'Start Balcony Garden',
      icon: BookOpen,
      title: 'How to Start an Apartment Balcony Garden'
    },
    {
      href: '/water-plants-while-away',
      label: 'Vacation Plant Care',
      icon: Droplets,
      title: 'How to Keep Plants Alive While Travelling'
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-emerald-900 group transition-transform active:scale-98"
            aria-label="GreenNest Balcony Gardening Home"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-200 group-hover:bg-emerald-700 transition-colors">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-950 font-serif">
                Green<span className="text-emerald-600">Nest</span>
              </span>
              <span className="hidden sm:block text-[11px] font-semibold text-emerald-700 tracking-wider uppercase">
                Indian Balcony Gardening
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-100/80 text-emerald-900 shadow-xs ring-1 ring-emerald-300'
                      : 'text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-stone-500'}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action / Quick Badge */}
          <div className="hidden lg:flex items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Small Indian Homes Guide
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                      : 'text-stone-800 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-stone-100 px-4 text-xs text-stone-500">
            Dedicated gardening advice for apartments across India.
          </div>
        </div>
      )}
    </header>
  );
};
