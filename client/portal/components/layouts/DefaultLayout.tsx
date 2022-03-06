import { ReactNode } from 'react';

type DefaultLayoutProps = {
    children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
    <>
        Header
        <main>{children}</main>
        Footer
    </>
);