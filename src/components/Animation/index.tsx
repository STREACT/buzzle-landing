import styles from "./Animation.module.css";
import { motion } from "framer-motion";

export default function Animation() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <motion.div
          className={styles.sayHello}
          initial={{ opacity: 0, top: "80px" }}
          animate={{ opacity: 1, top: "0px" }}
          transition={{ duration: 1.5 }}
        >
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 4.5 }}
          >
            HELLO, WE ARE
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: 5.5, times: [0, 0.5, 1] }}
          >
            MAKE BUZZLE
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 7 }}
          >
            MAKE BUZZLE, Drag To B
          </motion.p>
        </motion.div>
        <div className={styles.buzzle}>
          <motion.div
            animate={{ x: 630 }}
            transition={{ duration: 0.5, delay: 4.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              B
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              U
            </motion.span>
          </motion.div>
          <motion.div
            animate={{ x: -200 }}
            transition={{ duration: 0.5, delay: 4.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
            >
              Z
            </motion.span>
          </motion.div>
          <motion.div
            animate={{ x: -35 }}
            transition={{ duration: 0.5, delay: 4.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.9 }}
            >
              Z
            </motion.span>
          </motion.div>
          <motion.div
            animate={{ x: -670 }}
            transition={{ duration: 0.5, delay: 4.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.1 }}
            >
              L
            </motion.span>
          </motion.div>
          <motion.div
            animate={{ x: -500 }}
            transition={{ duration: 0.5, delay: 4.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.3 }}
            >
              E
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
