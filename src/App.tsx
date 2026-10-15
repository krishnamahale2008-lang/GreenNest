import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage.tsx';
import { ArticlePage } from './pages/ArticlePage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { articles, getArticleBySlug } from './data/articles.ts';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/$/, '');
      return p === '' ? '/' : p;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.replace(/\/$/, '');
      setCurrentPath(p === '' ? '/' : p);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (currentPath === '/') {
      document.title = 'Balcony Garden Ideas India for Small Homes | GreenNest';
    } else {
      const slug = currentPath.replace(/^\//, '');
      const art = getArticleBySlug(slug);
      if (art) {
        document.title = art.title;
      } else {
        document.title = 'Page Not Found - Balcony Gardening Guide | GreenNest';
      }
    }
  }, [currentPath]);

  // Route matching
  if (currentPath === '/') {
    return <HomePage />;
  }

  const slug = currentPath.replace(/^\//, '');
  const matchedArticle = getArticleBySlug(slug);

  if (matchedArticle) {
    return <ArticlePage article={matchedArticle} />;
  }

  // Fallback 404
  return <NotFoundPage />;
}
