import styles from './Footer.module.css';
import { FaInstagram, FaXTwitter, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa6';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Devakrishna Prasobh</h3>
            <p>Python developer specializing in Telegram bots and automation solutions.</p>
            <div className={styles.socials}>
              <a href="https://instagram.com/iamdevakrishna" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://x.com/devakrishna__" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X">
                <FaXTwitter />
              </a>
              <a href="https://facebook.com/devakrishna.prasobh" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://github.com/thesilentdevka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:devakrishnaprasobh@gmail.com" aria-label="Email" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Devakrishna Prasobh. All rights reserved.</p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};
