import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import { About as AboutMe } from '../components';
import { ModalCtx } from '../store';

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

      <AboutMe />
    </>
  );
};

export default About;
