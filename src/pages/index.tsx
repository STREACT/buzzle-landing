import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Animation from "@/components/Animation";
import Head from "next/head";

export default function Home() {
  const [isFinish, setIsFinish] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const finishAnimation = () => {
    setTimeout(() => {
      setIsAnimate(true);
    }, 1500);
  };

  useEffect(() => {
    if (isAnimate) {
      setTimeout(() => {
        setIsFinish(true);
      }, 1000);
    }
  }, [isAnimate]);

  return (
    <>
      <Head>
        <title>Buzzle</title>
        <meta name="description" content="Enjoy build website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isFinish && <Header isFinish={isFinish} />}
        <Section>
          {isFinish ? null : (
            <Animation
              isAnimate={isAnimate}
              finishAnimation={finishAnimation}
            />
          )}
        </Section>
      </main>
    </>
  );
}
