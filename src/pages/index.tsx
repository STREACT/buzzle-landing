import Header from "@/components/Header";
import Section from "@/components/Section";
import Animation from "@/components/Animation";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buzzle</title>
        <meta name="description" content="Enjoy build website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
          <Animation />
        </Section>
      </main>
    </>
  );
}
