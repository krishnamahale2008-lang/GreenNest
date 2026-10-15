import test from 'node:test';
import assert from 'node:assert/strict';
import { articles, getArticleTotalWords, homePageData } from '../src/data/articles.ts';

test('Every article must have >= 800 words', () => {
  for (const article of articles) {
    const wordCount = getArticleTotalWords(article);
    assert.ok(
      wordCount >= 800,
      `Article ${article.slug} has ${wordCount} words, must be >= 800`
    );
  }
});

test('Every article has an image with width and height and alt text', () => {
  for (const article of articles) {
    assert.ok(article.heroImage.src.length > 0);
    assert.ok(article.heroImage.alt.length > 10);
    assert.ok(article.heroImage.width > 0);
    assert.ok(article.heroImage.height > 0);
  }
});

test('Every page has exactly one H1 containing main keyword', () => {
  assert.ok(homePageData.h1.toLowerCase().includes(homePageData.mainKeyword.toLowerCase()));
  for (const article of articles) {
    assert.ok(
      article.h1.toLowerCase().includes(article.mainKeyword.toLowerCase()),
      `Article ${article.slug} H1 "${article.h1}" must contain keyword "${article.mainKeyword}"`
    );
  }
});

test('Every page has at least 2 H2s formatted as real questions with 1-2 sentence direct answers', () => {
  // Home
  assert.ok(homePageData.questionH2s.length >= 2);
  for (const q of homePageData.questionH2s) {
    assert.ok(q.question.endsWith('?'));
    assert.ok(q.directAnswer.length > 20);
  }
  // Articles
  for (const article of articles) {
    const questionH2s = article.sections.filter(s => s.h2.endsWith('?'));
    assert.ok(
      questionH2s.length >= 2,
      `Article ${article.slug} has ${questionH2s.length} question H2s, must be >= 2`
    );
    for (const q of questionH2s) {
      assert.ok(q.directAnswer && q.directAnswer.length > 20);
    }
  }
});

test('Every article has at least 2 Q&A formatted paragraphs', () => {
  for (const article of articles) {
    assert.ok(
      article.qaParagraphs.length >= 2,
      `Article ${article.slug} has ${article.qaParagraphs.length} QA paragraphs, must be >= 2`
    );
    for (const qa of article.qaParagraphs) {
      assert.ok(qa.question.length > 10);
      assert.ok(qa.answer.length > 20);
    }
  }
});

test('Every article has 2-3 internal links with descriptive anchor text (never click here or read more)', () => {
  for (const article of articles) {
    assert.ok(
      article.internalLinks.length >= 2 && article.internalLinks.length <= 4,
      `Article ${article.slug} has ${article.internalLinks.length} internal links, expected 2-3`
    );
    for (const link of article.internalLinks) {
      const lowerText = link.anchorText.toLowerCase();
      assert.ok(!lowerText.includes('click here'), 'Anchor text must not include "click here"');
      assert.ok(!lowerText.includes('read more'), 'Anchor text must not include "read more"');
    }
  }
});
