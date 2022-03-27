import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeHero } from '@/components/blocks/home/HomeHero'
import { Advantages } from '@/components/blocks/home/Advantages/Advantages'
import { HomePromos } from '@/components/blocks/home/HomePromos'
import { BestSalles } from '@/components/blocks/BestSalles'
import { PopularCategories } from '@/components/blocks/home/PopularCategories'
import { NewGoods } from '@/components/blocks/NewGoods'
import { PopularNews } from '@/components/PopularNews'
import { Partners } from '@/components/blocks/home/Partners'
import { Subscribe } from '@/components/Subscribe'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeHero />
            <Advantages />

            <div className="flex flex-col container mx-auto">
                <BestSalles />
                <HomePromos />
                <PopularCategories />
                <NewGoods />
                <PopularNews />
                <Partners />
                <Subscribe />
            </div>
        </div>
    )
}

export default Home
