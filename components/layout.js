import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name_en = 'Adam Albarghouthi'
const name_ar = 'آدم البرغوثي'

export const siteTitle = 'Adam Albarghouthi آدم البرغوثي'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="Adam Albarghouthi's personal website"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div>
          <h2 className={utilStyles.headingLg}>
            <div className={utilStyles.flexBox}>
              <span>{name_en}</span>
              <span className={`${utilStyles.mlAuto} ${utilStyles.textRight}`}>
                {name_ar}
              </span>
            </div>
          </h2>
          <ul className={utilStyles.horizontalList}>
            <li className={utilStyles.horizontalListItem}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={utilStyles.horizontalListItem}>
              <Link href="mailto:adam.albarghouthi@yandex.com">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.paper}>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back</a>
          </Link>
        </div>
      )}
    </div>
  )
}