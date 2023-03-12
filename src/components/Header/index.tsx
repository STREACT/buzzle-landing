import { motion } from "framer-motion";
import styles from "./Header.module.css";
import Image from "next/image";

interface HeaderProps {
  isFinish: boolean;
}

const variants = {
  closed: { opacity: 0, top: "-80px" },
  open: { opacity: 1, top: "0px" },
};

export default function Header({ isFinish }: HeaderProps) {
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, top: "-80px" }}
        animate={isFinish && "open"}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <div className={styles.box}>
          <motion.div
            className={styles.logo}
            initial={{ opacity: 0 }}
            animate={isFinish && { opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/image/buzzle_logo_icon.svg"
              alt="buzzle_logo"
              width={26}
              height={34}
            />
            <p>Buzzle</p>
          </motion.div>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFinish && { opacity: 1 }}
                transition={{ duration: 2 }}
              >
                주요기능
              </motion.div>
            </li>
            <li className={styles.menu__item}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFinish && { opacity: 1 }}
                transition={{ duration: 2 }}
              >
                템플릿
              </motion.div>
            </li>
            <li className={styles.menu__item}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFinish && { opacity: 1 }}
                transition={{ duration: 2 }}
              >
                요금
              </motion.div>
            </li>
            <li className={styles.menu__item}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFinish && { opacity: 1 }}
                transition={{ duration: 2 }}
              >
                디자이너 찾기
              </motion.div>
            </li>
            <li className={styles.menu__item}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFinish && { opacity: 1 }}
                transition={{ duration: 2 }}
              >
                고객지원
              </motion.div>
            </li>
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isFinish && { opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <button className={styles.join__button}>Waitlist</button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
