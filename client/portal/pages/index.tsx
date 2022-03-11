import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeHero } from '@/components/pages/home/hero'
import { ProductShowcase } from '@/components/ProductShowcase'

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
                <ProductShowcase title="Хит продаж" />
                <div>
                    Преимущества
                </div>
                <div>
                    Слайдер с акциями + товар дня
                </div>
                <div>
                    Категории товаров
                </div>
                <div>
                    Новые товары
                </div>
                <div>
                    Новости
                </div>
                <div>
                    Подписаться на рассылку
                </div>
                <div>
                    Footer
                </div>
            </div>
        </div>
    )
}

export default Home
