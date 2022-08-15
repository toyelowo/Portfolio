import type { NextPage } from 'next';
import Head from 'next/head';

import { About as AboutMe } from '../components';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Tayo&apos;s Portfolio</title>
        <meta
          name="description"
          content="About Me page for Tayo's web development portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutMe />
      </main>
    </>
  );
};

export default About;
