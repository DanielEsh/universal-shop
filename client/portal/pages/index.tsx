import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeHero } from '@/components/pages/home/hero'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeHero />

            <div className="container mx-auto">
                Page
            </div>
        </div>
    )
}

export default Home
