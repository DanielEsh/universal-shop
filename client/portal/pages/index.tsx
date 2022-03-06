import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">
                    Home Page
                </h1>
            </div>
        </div>
    )
}

export default Home
