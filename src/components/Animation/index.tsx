import styles from "./Animation.module.css";

export default function Animation() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.sayHello}>HELLO, WE ARE</p>
        <p className={styles.buzzle}>
          <span className={styles.buzzleB}>B</span>
          <span className={styles.buzzleU}>U</span>
          <span className={styles.buzzleZ}>Z</span>
          <span className={styles.buzzleZZ}>Z</span>
          <span className={styles.buzzleL}>L</span>
          <span className={styles.buzzleE}>E</span>
        </p>
      </div>
    </div>
  );
}
