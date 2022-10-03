import Head from 'next/head'
import * as React from 'react';
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

type Props = {
  children?: React.ReactNode
};

export const MainLayout:React.FC<Props> = ({children }) => {
  return (
    <>
        <div className={styles.container}>
      <Head>
        <title>About - Joaquin</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
       {children}

      </main>

      
    </div>
    </>
  )
}
