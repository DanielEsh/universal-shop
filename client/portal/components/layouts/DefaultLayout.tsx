import { ReactNode } from 'react'
import { Header } from '../layouts/header'

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
    <>
        <Header />
        <main className="relative bg-white z-[1]">{children}</main>
    </>
)