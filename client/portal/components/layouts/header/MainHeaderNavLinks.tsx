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
                    <Link 
                        href={link}
                        color="currentColor"
                        key={index}
                    >
                        {name}
                    </Link>
                ))
            }
        </div>
    )
}
