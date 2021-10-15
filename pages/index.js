import { useRouter } from 'next/router'
import Head from 'next/head'
import List from '../components/Results/List';
import Search from '../components/Search/Search';
import { PER_PAGE } from '../config';

export default function Home() {
  const router = useRouter();

  const handleSubmit = (event, query) => {
    event.preventDefault();
    router.push({
      pathname: '/',
      query,
    })
  };

  const handlePagination = (event, page) => {
    event.preventDefault();
    router.push({
      pathname: '/',
      query: {
        ...router.query,
        offset: (page - 1) * PER_PAGE,
      },
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 max-w-7xl m-auto">
      <Head>
        <title>Lottie - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-8 md:px-20">

        <h1 className="text-6xl font-bold">
          Search Results
        </h1>

        <Search onSubmit={handleSubmit} initial={router.query} />

        <h2 className="text-3xl font-bold mt-10">
          List of Properties
        </h2>

        <List params={router.query} onPagination={handlePagination} />
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
