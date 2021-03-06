import { ReactNode, useState } from 'react'
import { HeaderBanner } from '@/components/layouts/headerBanner'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    const [isHeaderBannerVisible, setIsHeaderBannerVisible] = useState<boolean>(true)

    return (
        <>
            {
                isHeaderBannerVisible && (
                    <HeaderBanner 
                        label="При покупке 200 бонусов в подарок"
                    />
                )
            }
            
            <div className="relative">
                <Header />
                <main className="relative bg-white z-[1] dark:bg-dark-500">{children}</main>
                <Footer />
            </div>
        </>
    )
}