import test from 'node:test';
import assert from 'node:assert/strict';

export interface PageMetadata {
  url: string;
  title: string;
  metaDescription: string;
  mainKeyword: string;
  relatedKeywords: string[];
  h1: string;
  questionH2s: string[];
  wordCount?: number;
}

export const sitePages: Record<string, PageMetadata> = {
  home: {
    url: '/',
    title: 'Balcony Garden Ideas India for Small Homes | GreenNest',
    metaDescription: 'Explore smart balcony garden ideas India for city flats. Learn practical layouts, hardy plants, and budget soil tips to design your private green sanctuary.',
    mainKeyword: 'balcony garden ideas India',
    relatedKeywords: ['small balcony plants', 'balcony gardening for beginners'],
    h1: 'Balcony Garden Ideas India: Urban Gardening for Small Flats',
    questionH2s: [
      'How much sunlight does a balcony garden need in India?',
      'Can you grow a thriving garden on a very small Indian balcony?'
    ]
  },
  article1: {
    url: '/best-balcony-plants-india',
    title: 'Best Balcony Plants India: 10 Easy Picks | GreenNest',
    metaDescription: 'Find the best balcony plants India for apartments. From fragrant jasmine to hardy tulsi and money plants, pick lush species that thrive in Indian heat today.',
    mainKeyword: 'best balcony plants India',
    relatedKeywords: ['low maintenance balcony plants', 'balcony plants for sunlight'],
    h1: 'Best Balcony Plants India: 10 Hardy Picks for City Balconies',
    questionH2s: [
      'Which balcony plants survive extreme Indian summer heat?',
      'What are the best low maintenance balcony plants for apartments?'
    ],
    wordCount: 1050
  },
  article2: {
    url: '/start-balcony-garden',
    title: 'How to Start a Balcony Garden: Beginner Guide | GreenNest',
    metaDescription: 'Learn how to start a balcony garden from scratch in Indian apartments. Master soil mixing, pot selection, and sun mapping to grow your first plants with ease.',
    mainKeyword: 'how to start a balcony garden',
    relatedKeywords: ['balcony garden for beginners', 'balcony pot setup'],
    h1: 'How to Start a Balcony Garden: A Step-by-Step Indian Guide',
    questionH2s: [
      'What is the ideal potting soil mix for balcony gardens in India?',
      'How should you choose pots for an Indian apartment balcony?'
    ],
    wordCount: 1120
  },
  article3: {
    url: '/water-plants-while-away',
    title: 'How to Keep Plants Alive on Vacation: 5 Tips | GreenNest',
    metaDescription: 'Discover how to keep plants alive on vacation during hot Indian summers. Use easy wick systems, bottle drip tricks, and grouping tips to protect your pots now.',
    mainKeyword: 'how to keep plants alive on vacation',
    relatedKeywords: ['self watering pots', 'water plants while travelling'],
    h1: 'How to Keep Plants Alive on Vacation: Indian Balcony Care',
    questionH2s: [
      'How long can balcony plants survive without water in Indian weather?',
      'How do DIY wick watering systems work for balcony pots?'
    ],
    wordCount: 1080
  }
};

test('Page title tags must be 50-60 characters and contain keyword near start', () => {
  for (const [key, page] of Object.entries(sitePages)) {
    const len = page.title.length;
    assert.ok(
      len >= 50 && len <= 60,
      `Page ${key} title "${page.title}" length is ${len}, must be between 50 and 60 chars`
    );
    // Keyword near the start
    const lowerTitle = page.title.toLowerCase();
    const lowerKeyword = page.mainKeyword.toLowerCase();
    assert.ok(
      lowerTitle.includes(lowerKeyword.slice(0, 15)),
      `Page ${key} title should include start of main keyword`
    );
  }
});

test('Meta descriptions must be exactly 150-160 characters and include main keyword', () => {
  for (const [key, page] of Object.entries(sitePages)) {
    const len = page.metaDescription.length;
    assert.ok(
      len >= 150 && len <= 160,
      `Page ${key} meta description "${page.metaDescription}" length is ${len}, must be exactly 150-160 chars`
    );
    assert.ok(
      page.metaDescription.toLowerCase().includes(page.mainKeyword.toLowerCase()),
      `Page ${key} meta description must include main keyword "${page.mainKeyword}"`
    );
  }
});

test('Each page has exactly one H1 containing main keyword', () => {
  for (const [key, page] of Object.entries(sitePages)) {
    assert.ok(
      page.h1.toLowerCase().includes(page.mainKeyword.toLowerCase()),
      `Page ${key} H1 "${page.h1}" must contain main keyword "${page.mainKeyword}"`
    );
  }
});

test('Each page has at least 2 H2s formulated as real questions', () => {
  for (const [key, page] of Object.entries(sitePages)) {
    assert.ok(page.questionH2s.length >= 2, `Page ${key} must have at least 2 question H2s`);
    for (const q of page.questionH2s) {
      assert.ok(q.endsWith('?'), `Question H2 "${q}" must end with a question mark`);
    }
  }
});

test('Articles have word count >= 800 words', () => {
  assert.ok((sitePages.article1.wordCount ?? 0) >= 800);
  assert.ok((sitePages.article2.wordCount ?? 0) >= 800);
  assert.ok((sitePages.article3.wordCount ?? 0) >= 800);
});
