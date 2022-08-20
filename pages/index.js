import Head from 'next/head'
import Index from '../components/homeScreen/Index'



export default function Home() {
  return (
    <div>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Stream TV and Movies Live and Online | Hulu</title>
        <meta
          name="title"
          property="og:title"
          content="Stream TV and Movies Live and Online | Hulu"
        />
      </Head>
      
      <Index />
    </div>
  )
}