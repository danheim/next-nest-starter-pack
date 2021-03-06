import React from 'react';
import Head from 'next/head';
import styles from '@/components/HomePage/Home.module.css';

export const HomePage: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>
  </div>
);
