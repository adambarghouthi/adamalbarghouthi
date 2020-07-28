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
        My name is Adam Albarghouthi.
      </section>
    </Layout>
  )
}
