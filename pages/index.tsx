import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {LandingPageWrapper, Landing as LandingPage} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tayo&apos;s Portfolio</title>
        <meta name="description" content="Web development portfolio for Tayo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <LandingPageWrapper>
          <LandingPage />
        </LandingPageWrapper>
      </main> 
    </>
  )
}

export default Home;
