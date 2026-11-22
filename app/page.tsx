'use client';

import { useState } from 'react';

const lessons = [
  { icon: '01', title: 'Locators', subtitle: 'Find elements reliably', tag: 'Core' },
  { icon: '02', title: 'Assertions', subtitle: 'Verify behavior precisely', tag: 'Core' },
  { icon: '03', title: 'Actions', subtitle: 'Interact like a real user', tag: 'Core' },
  { icon: '04', title: 'API testing', subtitle: 'Validate endpoints', tag: 'Advanced' },
];

export default function Home() {
  const [count, setCount] = useState(0);
  const [revealed, setRevealed] = useState(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#" aria-label="Battleground home">
          <span className="brand-mark">P<span>W</span></span>
          <span>Playwright<br/><strong>Battleground</strong></span>
        </a>
        <div className="nav-links"><a className="active" href="#learn">Learn</a><a href="#arena">Arena</a><a href="#docs">Docs</a></div>
        <button className="profile" aria-label="Open profile">KN</button>
      </nav>

      <section className="hero">
        <div><p className="eyebrow"><span /> INTERACTIVE TRAINING LAB</p><h1>Train. Break.<br/><em>Automate.</em></h1></div>
        <div className="hero-aside"><p>Sharpen your Playwright skills through practical challenges built for real-world testing.</p><a className="primary" href="#arena">Enter the arena <span>→</span></a></div>
      </section>

      <section className="stats" aria-label="Your progress">
        <div><strong>04</strong><span>LEARNING<br/>TRACKS</span></div>
        <div><strong>12</strong><span>PRACTICE<br/>MISSIONS</span></div>
        <div><strong>{count}</strong><span>SUCCESSFUL<br/>ACTIONS</span></div>
        <div className="level"><span>LEVEL</span><strong>01</strong><div className="progress"><i /></div></div>
      </section>

      <section className="workspace" id="learn">
        <div className="learning">
          <div className="section-heading"><span>01</span><h2>Learning tracks</h2></div>
          <div className="lesson-grid">
            {lessons.map((lesson) => <article className="lesson" key={lesson.title}><div className="lesson-top"><span>{lesson.icon}</span><small>{lesson.tag}</small></div><h3>{lesson.title}</h3><p>{lesson.subtitle}</p><a href="#arena">Start track <span>↗</span></a></article>)}
          </div>
        </div>

        <aside className="arena" id="arena">
          <div className="section-heading"><span>02</span><h2>Practice arena</h2></div>
          <div className="challenge"><div className="challenge-head"><p>MISSION 01</p><span>Beginner</span></div><h3>Click counter</h3><p>Practice a basic action and assertion.</p>
            <div className="counter-stage"><button id="counter-button" onClick={() => setCount((value) => value + 1)}>Click me</button><output id="counter-output" aria-live="polite">Clicks: {count}</output></div>
            <div className="code"><div><span>01</span><code>await page.getByRole('button', {'{'} name: 'Click me' {'}'}).click();</code></div><div><span>02</span><code>await expect(page.getByText('Clicks: 1')).toBeVisible();</code></div></div>
          </div>
        </aside>
      </section>

      <section className="explore" id="docs"><div className="section-heading"><span>03</span><h2>Explore the playground</h2></div><div className="explore-card"><button onClick={() => setRevealed((value) => !value)}>{revealed ? 'Hide secret' : 'Reveal secret'}</button>{revealed && <p role="alert">The secret is: keep selectors human-readable.</p>}</div></section>
    </main>
  );
}
