import Head from 'next/head'
import '../styles/style.min.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:description" content="blablabla" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
