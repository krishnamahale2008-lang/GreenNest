import React from 'react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { homePageData, articles } from '../data/articles.ts';
import { ArrowRight, Sun, CheckCircle2, Sprout, Compass, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar currentPath="/" />

      <main id="main-content" className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading and Intro */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-700/60 text-emerald-200 border border-emerald-500/40 backdrop-blur-xs">
                  <Sprout className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Small Space Urban Gardening in India</span>
                </div>

                {/* Exactly one H1 per page containing main keyword */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white leading-[1.18]">
                  {homePageData.h1}
                </h1>

                <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed max-w-2xl">
                  Transform your cramped apartment balcony into a flourishing green oasis. Designed specifically for Indian weather, small floor plans, and busy lifestyles.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="/best-balcony-plants-india"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 text-emerald-950 hover:bg-emerald-400 active:bg-emerald-600 transition-all shadow-md shadow-emerald-950/20"
                  >
                    <span>Browse 10 Resilient Plants for Indian Balconies</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/start-balcony-garden"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-emerald-100 bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600/50 transition-all"
                  >
                    <span>Beginner Balcony Pot Setup Guide</span>
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-700/60 max-w-lg">
                  <div>
                    <span className="block text-2xl font-black text-emerald-300 font-serif">40°C+</span>
                    <span className="text-xs text-emerald-200/80">Heat-Hardy Species</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-emerald-300 font-serif">100%</span>
                    <span className="text-xs text-emerald-200/80">Lightweight Soil Mixes</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-emerald-300 font-serif">14 Days</span>
                    <span className="text-xs text-emerald-200/80">Vacation Watering Care</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image with set width and height */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-700/40 bg-emerald-950">
                  <img
                    src={homePageData.heroImage.src}
                    alt={homePageData.heroImage.alt}
                    width={homePageData.heroImage.width}
                    height={homePageData.heroImage.height}
                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="p-4 bg-emerald-950/90 border-t border-emerald-800 text-xs text-emerald-200 flex items-center justify-between">
                    <span className="font-medium">Modern Indian apartment balcony design</span>
                    <span className="text-emerald-400 font-semibold">GreenNest Living</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SHORT INTRO SECTION */}
        <section className="py-14 lg:py-18 bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 tracking-tight">
              Why Balcony Gardening Matters in Indian Cities
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Living in high-density urban apartments in Bengaluru, Mumbai, Delhi-NCR, Hyderabad, or Pune often disconnects us from nature. A balcony, even as compact as 4 feet by 6 feet, provides an extraordinary canvas to cultivate fragrant Mogra, fresh kitchen curry leaves, air-purifying snake plants, and vivid bougainvillea. With tailored <strong className="text-emerald-800 font-semibold">balcony garden ideas India</strong> flat residents can beat concrete heat, buffer city noise, and harvest organic kitchen herbs.
            </p>
          </div>
        </section>

        {/* 3 ARTICLE CARDS SECTION */}
        <section className="py-16 lg:py-24 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700 mb-2 block">
                Comprehensive Expert Guides
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 tracking-tight">
                Everything You Need for a Thriving Balcony
              </h2>
              <p className="text-stone-600 text-base mt-3">
                Explore in-depth articles packed with practical advice, potting proportions, and vacation protection systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((art, idx) => (
                <article
                  key={art.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Article Thumbnail */}
                  <div className="relative overflow-hidden aspect-[16/9] bg-stone-100">
                    <img
                      src={art.heroImage.src}
                      alt={art.heroImage.alt}
                      width={art.heroImage.width}
                      height={art.heroImage.height}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-emerald-800 shadow-sm border border-emerald-200">
                        Guide {idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        {art.readTime} • {art.mainKeyword}
                      </div>

                      <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {art.title.split('|')[0].trim()}
                      </h3>

                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                        {art.intro}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100">
                      {/* Descriptive anchor text link - NEVER 'click here' or 'read more' */}
                      <a
                        href={art.url}
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-1 transition-all"
                      >
                        {art.slug === 'best-balcony-plants-india' && (
                          <span>Discover the 10 best balcony plants for Indian homes</span>
                        )}
                        {art.slug === 'start-balcony-garden' && (
                          <span>Learn how to start your beginner balcony garden</span>
                        )}
                        {art.slug === 'water-plants-while-away' && (
                          <span>See 5 ways to keep balcony plants alive on vacation</span>
                        )}
                        <ArrowRight className="w-4 h-4 shrink-0 text-emerald-600" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUESTION H2s SECTION (At least 2 H2s must be real questions followed immediately by 1-2 sentence direct answer) */}
        <section className="py-16 lg:py-24 bg-white border-t border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                Frequently Asked Balcony Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 tracking-tight">
                Essential Balcony Gardening Advice for Indian Homes
              </h2>
              <p className="text-stone-600 text-base">
                Direct answers to the most common questions Indian apartment dwellers face when starting their green corners.
              </p>
            </div>

            {/* Question H2 #1 */}
            <div className="space-y-4 bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 flex items-start gap-3">
                <Sun className="w-7 h-7 text-amber-500 shrink-0 mt-1" />
                <span>{homePageData.questionH2s[0].question}</span>
              </h2>

              {/* Direct 1-2 sentence answer */}
              <div className="p-4 rounded-xl bg-emerald-100/80 border-l-4 border-emerald-600 text-emerald-950 font-medium text-base leading-relaxed">
                <strong>Direct Answer: </strong>
                {homePageData.questionH2s[0].directAnswer}
              </div>

              {/* More Detail */}
              <div className="text-stone-700 text-base leading-relaxed space-y-3 pt-2">
                <p>{homePageData.questionH2s[0].details}</p>
                <p>
                  To choose cultivars that match your light levels perfectly,{' '}
                  <a
                    href="/best-balcony-plants-india"
                    className="font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
                  >
                    browse the best resilient balcony plants for Indian climates
                  </a>{' '}
                  to discover sun-hardy choices like Bougainvillea or shade-tolerant snake plants.
                </p>
              </div>
            </div>

            {/* Question H2 #2 */}
            <div className="space-y-4 bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 flex items-start gap-3">
                <Layers className="w-7 h-7 text-emerald-600 shrink-0 mt-1" />
                <span>{homePageData.questionH2s[1].question}</span>
              </h2>

              {/* Direct 1-2 sentence answer */}
              <div className="p-4 rounded-xl bg-emerald-100/80 border-l-4 border-emerald-600 text-emerald-950 font-medium text-base leading-relaxed">
                <strong>Direct Answer: </strong>
                {homePageData.questionH2s[1].directAnswer}
              </div>

              {/* More Detail */}
              <div className="text-stone-700 text-base leading-relaxed space-y-3 pt-2">
                <p>{homePageData.questionH2s[1].details}</p>
                <p>
                  For a detailed blueprint on arranging pots, mixing lightweight soil, and choosing railing hooks,{' '}
                  <a
                    href="/start-balcony-garden"
                    className="font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
                  >
                    explore our beginner setup guide for balcony gardens
                  </a>{' '}
                  to start your garden safely on any apartment floor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 PILLARS OF BALCONY SUCCESS */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 text-center mb-12">
              The 4 Golden Rules for Small Indian Balconies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">Lightweight Soil First</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Never use pure garden mud. Always blend 40% cocopeat with vermicompost to keep pots lightweight for building safety.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">RWA-Friendly Drainage</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Use deep saucers beneath all pots to avoid water seepage complaints from downstairs neighbors in high-rise societies.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">Sun Orientation Match</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Identify your balcony facing direction. Group heat lovers on railings and sensitive foliage in bright indirect shade.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">Vacation Hydration Prep</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Never leave plants unattended during summer trips. Prepare capillary wick bottles to keep root zones hydrated.
                </p>
              </div>
            </div>

            {/* Third Internal Link on homepage */}
            <div className="text-center mt-12">
              <p className="text-stone-600 text-sm">
                Planning an upcoming holiday? Learn{' '}
                <a
                  href="/water-plants-while-away"
                  className="font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
                >
                  how to keep plants alive on vacation with easy wick and drip systems
                </a>{' '}
                before booking your flight tickets.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
