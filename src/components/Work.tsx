import { useState } from 'react';
import styles from './Work.module.css';

const projects = [
  {
    id: 1,
    title: 'TG-GDRIVEBOT',
    description: 'A Telegram bot to upload files and links to Google Drive accounts or Team Drive. Deployable via Heroku.',
    tags: ['Python', 'Telegram', 'Google Drive'],
    emoji: '🤖',
    stars: 11,
    url: 'https://github.com/thesilentdevka/TG-GDRIVEBOT',
  },
  {
    id: 2,
    title: 'MALLU-MANAGER-V2',
    description: 'A group managing bot with userbot module capabilities. Deploy with Heroku and Railway.',
    tags: ['Python', 'Telegram', 'Heroku'],
    emoji: '👥',
    stars: 1,
    url: 'https://github.com/thesilentdevka/MALLU-MANAGER-V2',
  },
  {
    id: 3,
    title: 'SpotDown',
    description: 'A telegram bot to download Youtube Music, Deezer and Spotify links.',
    tags: ['Python', 'Telegram', 'Music'],
    emoji: '🎵',
    stars: 0,
    url: 'https://github.com/thesilentdevka/SpotDown',
  },
];

export const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Work</h2>
          <p>My latest projects from GitHub. Click to explore and contribute.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.emoji}>{project.emoji}</span>
                <h3>{project.title}</h3>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.footer}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.stars}>⭐ {project.stars}</div>
              </div>

              {hoveredId === project.id && (
                <button className={styles.viewBtn}>View on GitHub →</button>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
