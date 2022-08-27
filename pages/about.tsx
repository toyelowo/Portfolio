import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import { About as AboutMe } from '../components';
import { ModalCtx } from '../store';

const About: NextPage = () => {
  const modalCtx = useContext(ModalCtx);

  const ariaHiddenKey = modalCtx.isModalOpen ? 'true' : 'false';

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

      <main aria-hidden={ariaHiddenKey}>
        <AboutMe />
      </main>
    </>
  );
};

export default About;
