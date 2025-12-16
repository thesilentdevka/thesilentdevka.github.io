import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind or just want to chat about tech? 
            I'm always open to discussing new opportunities and interesting ideas.
          </p>
          
          <a 
            href="mailto:devakrishnaprasobh@gmail.com"
            className={styles.emailButton}
          >
            <span className={styles.icon}>✉️</span>
            <span>Get In Touch</span>
          </a>

          <div className={styles.info}>
            <p className={styles.email}>devakrishnaprasobh@gmail.com</p>
          </div>
        </div>

        <div className={styles.decoration}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
};
