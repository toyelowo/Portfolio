import type { NextPage } from 'next';
import Head from 'next/head';

import { Work as WorkPage } from '../components';

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Work - Tayo&apos;s Portfolio</title>
        <meta name="description" content="Work for tayo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WorkPage />
    </>
  );
};

export default Work;
