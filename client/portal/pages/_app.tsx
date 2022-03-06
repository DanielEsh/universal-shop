import type { AppProps } from 'next/app'
import { DefaultLayout } from '../components/layouts/DefaultLayout'

import '../styles/globals.css'
import 'swiper/css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}

export default MyApp