import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import profileP from '../public/images/profile1.jpg'

const name = 'Ángel';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
                priority
                src={profileP}
                className={utilStyles.borderCircle}
                height={200}
                width={200}
                alt=""
              />
            <h1 className={`${utilStyles.heading2Xl} ${utilStyles.name}`}></h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                  priority
                  src={profileP}
                  className={`${utilStyles.borderCircle1} ${utilStyles.borderCircle2}`}
                  height={200}
                  width={200}
                  alt=""
                />
            </Link>
            <Link href="/" className={utilStyles.colorInherit}>
              <h1 className={`${utilStyles.heading2Xl} ${utilStyles.me}`}>Me?</h1>
            </Link>
          </>
        )}
      </header>
      <main><div className='hr'/>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}