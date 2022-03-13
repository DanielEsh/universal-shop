import NextLink from 'next/link'
import { Link } from '@/components/ui/Link'

const LINKS = [
    {
        name: 'Способы покупки',
        link: '/purchase',
    },
    {
        name: 'О компании',
        link: '/about',
    },
    {
        name: 'Доставка',
        link: '/delivery',
    },
]

export const MainHeaderNavLinks = () => {
    return (
        <div className="flex gap-6">
            {
                LINKS.map(({ name, link }, index) => (
                    <NextLink key={index} href={link} passHref>
                        <Link 
                            color="currentColor"
                        >
                            {name}
                        </Link>
                    </NextLink>
                    
                ))
            }
        </div>
    )
}
