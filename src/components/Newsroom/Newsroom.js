import React from 'react';
import './style.css';
import _newsRaw from '../../content/newsroom.json';
const newsData = _newsRaw.posts;

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const Newsroom = () => (
  <section id="newsroom" className="newsroom">
    <div className="newsroom__header">
      <span className="section-label">NEWSROOM</span>
      <h2>Latest Updates</h2>
    </div>

    <div className="newsroom__grid">
      {newsData.map((post, i) => (
        <article key={i} className="news-card">
          <a href={post.link} className="news-card__image-wrap">
            <img src={post.image} alt={post.title} className="news-card__image" />
          </a>
          <div className="news-card__body">
            <time className="news-card__date">{formatDate(post.date)}</time>
            <h3 className="news-card__title">
              <a href={post.link}>{post.title}</a>
            </h3>
            <p className="news-card__excerpt">{post.excerpt}</p>
            <a href={post.link} className="news-card__read-more">Read more →</a>
          </div>
        </article>
      ))}
    </div>

    <div className="newsroom__footer">
      <a href="#newsroom" className="newsroom__see-more">See All News →</a>
    </div>
  </section>
);

export default Newsroom;
