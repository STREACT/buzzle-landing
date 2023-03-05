import styles from "./Animation.module.css";

export default function Animation() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.sayHello}>HELLO, WE ARE</p>
        <div className={styles.buzzle}>
          <span className={styles.moveFarRight}>
            <span className={styles.buzzleB}>B</span>
            <span className={styles.buzzleU}>U</span>
          </span>
          <span className={styles.moveSecondSeat}>
            <span className={styles.buzzleZ}>Z</span>
          </span>
          <span className={styles.moveFourthSeat}>
            <span className={styles.buzzleZZ}>Z</span>
          </span>
          <span className={styles.moveFirstSeat}>
            <span className={styles.buzzleL}>L</span>
          </span>
          <span className={styles.moveThirdSeat}>
            <span className={styles.buzzleE}>E</span>
          </span>
        </div>
      </div>
    </div>
  );
}
