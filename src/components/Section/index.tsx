import { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  background?: string;
  children: ReactNode;
}

export default function Section({
  background = "#000",
  children,
}: SectionProps) {
  return (
    <section className={styles.container} style={{ background }}>
      <div className={styles.box}>{children}</div>
    </section>
  );
}
