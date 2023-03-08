import styles from "./Animation.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimationProps {
  isAnimate: boolean;
  finishAnimation: () => void;
}

export default function Animation({
  isAnimate,
  finishAnimation,
}: AnimationProps) {
  const [isDraggable, setIsDraggable] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const alphabetB = useSpring(0, { stiffness: 2000, damping: 400 });
  const wordLZEZ = useSpring(0, { stiffness: 2000, damping: 400 });

  const alphabetU = useSpring(0, { stiffness: 1500, damping: 400 });
  const alphabetFirstZ = useSpring(0, { stiffness: 1500, damping: 400 });
  const alphabetSecondZ = useSpring(0, { stiffness: 1500, damping: 400 });
  const alphabetL = useSpring(0, { stiffness: 1500, damping: 400 });
  const alphabetE = useSpring(0, { stiffness: 1500, damping: 400 });

  const totalOpacity = useMotionValue(1);

  const handleDragEnd = () => {
    const positionX = alphabetB.get();
    if (positionX > -350) {
      alphabetB.stop();
      wordLZEZ.stop();
      alphabetB.set(0);
      wordLZEZ.set(0);
    } else {
      alphabetB.stop();
      wordLZEZ.stop();
      wordLZEZ.set(170);
      alphabetB.set(-630);
      setTrigger(true);
    }
  };

  const handleDrag = () => {
    const x = alphabetB.get();
    wordLZEZ.set(-(x / 640) * 180);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsDraggable(true);
    }, 7000);
  }, []);

  useEffect(() => {
    if (trigger) {
      alphabetU.set(-630);
      wordLZEZ.set(0);
      alphabetFirstZ.set(200);
      alphabetSecondZ.set(35);
      alphabetL.set(670);
      alphabetE.set(500);

      finishAnimation();
    }
  }, [
    alphabetU,
    wordLZEZ,
    alphabetFirstZ,
    trigger,
    alphabetSecondZ,
    alphabetL,
    alphabetE,
    finishAnimation,
  ]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.box}
        style={{ opacity: totalOpacity }}
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimate ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
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
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            style={{ x: alphabetB }}
            drag={isDraggable ? "x" : false}
            dragConstraints={{ left: -630, right: 0 }}
            dragElastic={0}
          >
            <motion.div
              animate={{ x: 630 }}
              transition={{ duration: 0.5, delay: 4.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                B
              </motion.div>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 7.0 }}
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-15px",
                }}
                src="/image/blue_box.svg"
                alt="blue_box"
              />
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ x: 630 }}
            transition={{ duration: 0.5, delay: 4.3 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              style={{ x: alphabetU }}
            >
              U
            </motion.div>
          </motion.div>
          <motion.div style={{ display: "flex", x: wordLZEZ }}>
            <motion.div
              animate={{ x: -200 }}
              transition={{ duration: 0.5, delay: 4.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.7 }}
                style={{ x: alphabetFirstZ }}
              >
                Z
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ x: -35 }}
              transition={{ duration: 0.5, delay: 4.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.9 }}
                style={{ x: alphabetSecondZ }}
              >
                Z
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ x: -670 }}
              transition={{ duration: 0.5, delay: 4.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.1 }}
                style={{ x: alphabetL }}
              >
                L
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ x: -500 }}
              transition={{ duration: 0.5, delay: 4.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.3 }}
                style={{ x: alphabetE }}
              >
                E
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
