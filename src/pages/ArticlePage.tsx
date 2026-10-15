import React from 'react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { ArticleData } from '../data/articles.ts';
import { Calendar, Clock, ArrowRight, HelpCircle, CheckCircle, ChevronRight, BookOpen, Share2 } from 'lucide-react';

interface ArticlePageProps {
  article: ArticleData;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar currentPath={article.url} />

      <main id="main-content" className="flex-1">
        {/* BREADCRUMB NAVIGATION */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-stone-200 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-stone-500">
              <li>
                <a href="/" className="hover:text-emerald-700 font-medium">Home</a>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </li>
              <li>
                <span className="text-emerald-900 font-semibold truncate max-w-[240px] sm:max-w-none inline-block">
                  {article.title.split(':')[0]}
                </span>
              </li>
            </ol>
          </div>
        </nav>

        {/* ARTICLE HEADER & HERO */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <header className="space-y-6 mb-10">
            {/* Meta Tags / Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-800">
              <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300">
                Urban Gardening Guide
              </span>
              <span className="flex items-center gap-1.5 text-stone-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.publishedDate}</span>
              </span>
              <span className="flex items-center gap-1.5 text-stone-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>

            {/* Exactly one H1 per page containing the main keyword */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-950 leading-[1.2]">
              {article.h1}
            </h1>

            {/* Intro Lead */}
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-serif italic border-l-4 border-emerald-600 pl-4 py-1 bg-emerald-50/40 rounded-r-lg">
              {article.intro}
            </p>

            {/* TOP HERO IMAGE (With width, height, and descriptive alt text) */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 mt-6">
              <img
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                width={article.heroImage.width}
                height={article.heroImage.height}
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="p-3 bg-stone-100 border-t border-stone-200 text-xs text-stone-600 flex justify-between items-center">
                <span>{article.heroImage.alt}</span>
                <span className="text-emerald-700 font-semibold">GreenNest India</span>
              </div>
            </div>
          </header>

          {/* TABLE OF CONTENTS QUICK CARD */}
          <div className="mb-12 p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>In This Balcony Guide</span>
            </h3>
            <ul className="space-y-2 text-sm text-stone-700">
              {article.sections.map((section, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <a
                    href={`#section-${idx}`}
                    className="hover:text-emerald-700 hover:underline transition-colors"
                  >
                    {section.h2}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <a href="#qa-section" className="hover:text-emerald-700 hover:underline transition-colors">
                  Frequently Asked Balcony Questions &amp; Answers
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <a href="#internal-links" className="hover:text-emerald-700 hover:underline transition-colors">
                  Related Balcony Gardening Articles
                </a>
              </li>
            </ul>
          </div>

          {/* MAIN ARTICLE BODY SECTIONS */}
          <div className="space-y-14 text-stone-800 text-base sm:text-lg leading-relaxed">
            {article.sections.map((section, sIdx) => {
              const isQuestion = section.h2.endsWith('?');
              return (
                <section key={sIdx} id={`section-${sIdx}`} className="space-y-5 scroll-mt-24">
                  {/* H2 Heading */}
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight flex items-start gap-3">
                    <span className="text-emerald-700 font-sans font-bold text-xl mt-0.5">
                      {sIdx + 1}.
                    </span>
                    <span>{section.h2}</span>
                  </h2>

                  {/* Direct 1-2 sentence answer callout if H2 is a question */}
                  {isQuestion && section.directAnswer && (
                    <div className="p-5 rounded-xl bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 font-medium text-base sm:text-lg leading-relaxed shadow-xs">
                      <span className="block font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Quick Direct Answer
                      </span>
                      {section.directAnswer}
                    </div>
                  )}

                  {/* Section Paragraphs */}
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-stone-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Optional Diagram inside Section 1 or 2 */}
                  {sIdx === 0 && article.diagramImage && (
                    <div className="my-8 rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs">
                      <img
                        src={article.diagramImage.src}
                        alt={article.diagramImage.alt}
                        width={article.diagramImage.width}
                        height={article.diagramImage.height}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <p className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 italic">
                        {article.diagramImage.caption}
                      </p>
                    </div>
                  )}

                  {/* H3 Subsections */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
                      {section.subsections.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2 hover:border-emerald-300 transition-colors"
                        >
                          <h3 className="text-lg font-serif font-bold text-stone-900">
                            {sub.h3}
                          </h3>
                          <p className="text-sm text-stone-600 leading-relaxed">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}

            {/* DEDICATED Q&A FORMATTED PARAGRAPHS SECTION (Requirement: at least 2 paragraphs per article in Q&A format) */}
            <section id="qa-section" className="pt-8 border-t border-stone-200 space-y-6 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-600 shrink-0" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-6">
                {article.qaParagraphs.map((qa, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3"
                  >
                    <p className="font-serif font-bold text-stone-900 text-lg sm:text-xl">
                      <span className="text-emerald-700 font-sans mr-2">Q:</span>
                      {qa.question}
                    </p>
                    <p className="text-stone-700 text-base leading-relaxed pl-6 border-l-2 border-emerald-500">
                      <strong className="text-emerald-800">A: </strong>
                      {qa.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2-3 INTERNAL LINKS SECTION (Requirement: Every link must have descriptive anchor text, never 'click here' or 'read more') */}
            <section id="internal-links" className="pt-10 border-t border-stone-200 space-y-6 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Continue Reading on GreenNest
              </h2>
              <p className="text-stone-600 text-sm">
                Deepen your balcony gardening knowledge with these connected guides tailored for Indian city apartments:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.internalLinks.map((link, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between space-y-3 hover:bg-emerald-100/70 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 block">
                        Recommended Next Step
                      </span>
                      <p className="text-xs text-stone-600 mb-3">
                        {link.description}
                      </p>
                    </div>
                    {/* Explicit descriptive anchor text, never 'click here' or 'read more' */}
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2"
                    >
                      <span>{link.anchorText}</span>
                      <ArrowRight className="w-4 h-4 shrink-0 text-emerald-600" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};
