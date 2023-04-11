import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Menu from '@/components/Menu';
import Link from "next/link";

export default function Contact() {
    return (
        <>
        <Head>
          <title>Jennifer Gaupel - Contact</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>      
        <main className={styles.main}>
          <Menu></Menu>
          <div>
            <p>Send me an email at jennifergaupel@gmail.com</p>
          </div>              
        </main>
      </>
    )
}