import Head from 'next/head'
import List from '../components/Results/List';
import Search from '../components/Results/Search';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Lottie - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20">

        <h1 className="text-6xl font-bold">
          Search Results
        </h1>

        <Search />

        <h2 className="text-3xl font-bold mt-10">
          List of Properties
        </h2>
        <List />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
