import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeHero } from '@/components/blocks/home/HomeHero'
import { AdvantagesNew } from '@/components/blocks/home/AdvantagesNew/Advantages'
import { HomePromos } from '@/components/blocks/home/HomePromos'
import { ProductShowcase } from '@/components/ProductShowcase'
import { PopularCategories } from '@/components/blocks/home/PopularCategories'
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

            <div className="flex flex-col container mx-auto">
                <AdvantagesNew />
                <ProductShowcase title="Хит продаж" />
                <HomePromos />
                <PopularCategories />
                <PopularNews />
                <Partners />
                <Subscribe />
            </div>
        </div>
    )
}

export default Home
