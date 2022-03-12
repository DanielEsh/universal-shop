import { ReactNode } from 'react'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
    <>
        <Header />
        <main className="relative bg-white z-[1]">{children}</main>
        <Footer />
    </>
)