import styles from "./drm.module.css";

export default function DRMPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>🔬</div>
        <h1 className={styles.title}>DRM Gurukooll</h1>
        <p className={styles.subtitle}>Design Research Methodology Workshop</p>
        <div className={styles.badge}>Coming Soon</div>
        <p className={styles.description}>
          We are working on bringing you the next edition of the DRM Gurukooll workshop.
          Stay tuned for updates on dates, venue, and registration details.
        </p>
        <a href="/" className={styles.backLink}>← Back to Home</a>
      </div>
    </div>
  );
}
