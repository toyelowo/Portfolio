import type { NextPage } from 'next';
import Head from 'next/head';

import { LandingPageWrapper, Landing as LandingPage } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tayo&apos;s Portfolio</title>
        <meta name="description" content="Web development portfolio for Tayo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </>
  );
};

export default Home;
