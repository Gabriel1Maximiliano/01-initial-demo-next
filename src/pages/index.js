import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Next App</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
      <main className={styles.main}>
       
        <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
        </p>
        {/* <a
            href="/about"
            className={styles.card}
            //target="_blank"
            rel="noopener noreferrer"
          >  
            <h2 className={inter.className}>
              Ir al about <span>-&gt;</span>
            </h2>
          </a> */}
          <h2 className={inter.className}>
              Ir al about <span>-&gt;</span>
              <Link href='/about' >
              About
              </Link>
            </h2>

       
        

        
      </main>
    </>
  )
}
