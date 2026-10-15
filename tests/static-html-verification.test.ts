import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

test('index.html contains pre-rendered text, title, meta description, and canonical tag', () => {
  const content = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
  assert.ok(content.includes('<title>Balcony Garden Ideas India for Small Homes | GreenNest</title>'));
  assert.ok(content.includes('name="description" content="Explore smart balcony garden ideas India for city flats.'));
  assert.ok(content.includes('<link rel="canonical"'));
  assert.ok(content.includes('name="google-site-verification"'));
  assert.ok(content.includes('Balcony Garden Ideas India: Urban Gardening for Small Flats</h1>'));
  assert.ok(content.includes('How much sunlight does a balcony garden need in India?'));
  assert.ok(content.includes('Can you grow a thriving garden on a very small Indian balcony?'));
});

test('best-balcony-plants-india/index.html contains pre-rendered article content in view-source', () => {
  const content = fs.readFileSync(path.resolve(process.cwd(), 'best-balcony-plants-india/index.html'), 'utf-8');
  assert.ok(content.includes('<title>Best Balcony Plants India: 10 Easy Picks | GreenNest</title>'));
  assert.ok(content.includes('name="description" content="Find the best balcony plants India for apartments.'));
  assert.ok(content.includes('rel="canonical" href="https://ais-dev-rztsfo33txptgxn476s2rw-48003740199.asia-east1.run.app/best-balcony-plants-india"'));
  assert.ok(content.includes('Best Balcony Plants India: 10 Hardy Picks for City Balconies</h1>'));
  assert.ok(content.includes('Which balcony plants survive extreme Indian summer heat?'));
  assert.ok(content.includes('What are the best low maintenance balcony plants for apartments?'));
  assert.ok(content.includes('Bougainvillea, Holy Basil (Tulsi), Mogra, and Desert Rose (Adenium) survive severe 40°C+'));
  assert.ok(content.includes('explore our beginner setup guide for balcony gardens'));
});

test('start-balcony-garden/index.html contains pre-rendered setup guide in view-source', () => {
  const content = fs.readFileSync(path.resolve(process.cwd(), 'start-balcony-garden/index.html'), 'utf-8');
  assert.ok(content.includes('<title>How to Start a Balcony Garden: Beginner Guide | GreenNest</title>'));
  assert.ok(content.includes('name="description" content="Learn how to start a balcony garden from scratch in Indian apartments.'));
  assert.ok(content.includes('How to Start a Balcony Garden: A Step-by-Step Indian Guide</h1>'));
  assert.ok(content.includes('What is the ideal potting soil mix for balcony gardens in India?'));
  assert.ok(content.includes('How should you choose pots for an Indian apartment balcony?'));
  assert.ok(content.includes('browse the best resilient balcony plants for Indian climates'));
});

test('water-plants-while-away/index.html contains pre-rendered vacation guide in view-source', () => {
  const content = fs.readFileSync(path.resolve(process.cwd(), 'water-plants-while-away/index.html'), 'utf-8');
  assert.ok(content.includes('<title>How to Keep Plants Alive on Vacation: 5 Tips | GreenNest</title>'));
  assert.ok(content.includes('name="description" content="Discover how to keep plants alive on vacation during hot Indian summers.'));
  assert.ok(content.includes('How to Keep Plants Alive on Vacation: Indian Balcony Care</h1>'));
  assert.ok(content.includes('How long can balcony plants survive without water in Indian weather?'));
  assert.ok(content.includes('How do DIY wick watering systems work for balcony pots?'));
  assert.ok(content.includes('browse the best resilient balcony plants for Indian climates'));
});

test('404.html exists and contains navigation links to all main pages', () => {
  const content = fs.readFileSync(path.resolve(process.cwd(), '404.html'), 'utf-8');
  assert.ok(content.includes('href="/"'));
  assert.ok(content.includes('href="/best-balcony-plants-india"'));
  assert.ok(content.includes('href="/start-balcony-garden"'));
  assert.ok(content.includes('href="/water-plants-while-away"'));
});

test('robots.txt and sitemap.xml exist with correct directives', () => {
  const robots = fs.readFileSync(path.resolve(process.cwd(), 'public/robots.txt'), 'utf-8');
  assert.ok(robots.includes('User-agent: *'));
  assert.ok(robots.includes('Allow: /'));
  assert.ok(robots.includes('sitemap.xml'));

  const sitemap = fs.readFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), 'utf-8');
  assert.ok(sitemap.includes('https://ais-dev-rztsfo33txptgxn476s2rw-48003740199.asia-east1.run.app/'));
  assert.ok(sitemap.includes('https://ais-dev-rztsfo33txptgxn476s2rw-48003740199.asia-east1.run.app/best-balcony-plants-india'));
  assert.ok(sitemap.includes('https://ais-dev-rztsfo33txptgxn476s2rw-48003740199.asia-east1.run.app/start-balcony-garden'));
  assert.ok(sitemap.includes('https://ais-dev-rztsfo33txptgxn476s2rw-48003740199.asia-east1.run.app/water-plants-while-away'));
});
