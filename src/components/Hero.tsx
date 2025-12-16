import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        imageRef.current.style.setProperty('--mouse-x', `${x}px`);
        imageRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.signature}>Devakrishna</div>
          <h1 className={styles.title}>
            Crafting Intelligent Bots & 
            <span className={styles.highlight}> Automation Magic</span>
          </h1>
          <p className={styles.subtitle}>
            Hey there! I'm a Python developer who loves turning complex problems into elegant solutions. 
            Specializing in Telegram bot development and cloud automation, I've built tools that serve 
            thousands of users daily. Let's automate the boring stuff and build 
            something extraordinary together!
          </p>
          <div className={styles.cta}>
            <button className={styles.btnPrimary}>Explore My Work</button>
            <button className={styles.btnSecondary}>Get In Touch</button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageContainer} ref={imageRef}>
            <div className={styles.halo}></div>
            <div className={styles.imageWrapper}>
              <img 
                src="https://i.ibb.co/7x8J33W2/KHW-2170.jpg" 
                alt="Devakrishna Prasobh"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};
