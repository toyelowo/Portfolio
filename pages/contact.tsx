import type { NextPage } from 'next';
import Head from 'next/head';

import { Contact as ContactMe } from '../components';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me - Tayo&apos;s Portfolio</title>
        <meta
          name="description"
          content="Contact information for tayo. LinkedIn, GitHub links"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactMe />
    </>
  );
};

export default Contact;
