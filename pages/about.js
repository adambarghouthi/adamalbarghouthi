import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Adam Albarghouthi</title>
      </Head>
      <section>
        A little about me:
        <ul>
          <li>
            Hails from Palestine 🇵🇸
          </li>
          <li>
            Codes in JS
          </li>
          <li>
            Writes poetry in English & Arabic
          </li>
        </ul>
      </section>
      <section className={utilStyles.textRight}>
        القليل عني:
        <ul>
          <li>
            أصلي فلسطيني 🇵🇸
          </li>
          <li>
            أبرمج بلغة الJS 💻
          </li>
          <li>
            أكتب الشعر باللغتين الإنجليزية والعربية ✒️
          </li>
        </ul>
      </section>
    </Layout>
  )
}
