import styles from './About.module.css';

export const About = () => {
  const skills = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'Telegram Bots', icon: '🤖', level: 85 },
    { name: 'TypeScript', icon: '📘', level: 75 },
    { name: 'React', icon: '⚛️', level: 80 },
    { name: 'Node.js', icon: '🟢', level: 70 },
    { name: 'Cloud Deploy', icon: '☁️', level: 75 },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>About Me</h2>
          <p>Developer, Problem Solver, Bot Enthusiast</p>
        </div>

        <div className={styles.content}>
          <div className={styles.bio}>
            <div className={styles.bioCard}>
              <h3>👋 Hello!</h3>
              <p>
                I'm <strong>Devakrishna Prasobh</strong>, a passionate developer who loves building 
                practical solutions that make life easier. I specialize in creating Telegram bots 
                and automation tools that help thousands of users daily.
              </p>
              <p>
                My journey in tech started with Python, and I've been hooked ever since. Whether it's 
                building file management systems, music download bots, or group management tools, 
                I focus on creating efficient, user-friendly applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or brainstorming the next cool bot idea. I believe in writing 
                clean code and building tools that actually solve real problems.
              </p>
            </div>
          </div>

          <div className={styles.skills}>
            <h3>Skills & Technologies</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillCard}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillLevel} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>11+</div>
            <div className={styles.statLabel}>GitHub Stars</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>6+</div>
            <div className={styles.statLabel}>Projects</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>Python Love</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>∞</div>
            <div className={styles.statLabel}>Coffee Consumed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
