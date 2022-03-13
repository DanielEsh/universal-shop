import { Link } from '@/components/ui/Link'

const LINKS = [
    {
        name: 'Способы покупки',
    },
    {
        name: 'О компании',
    },
    {
        name: 'Доставка',
    },
]

export const MainHeaderNavLinks = () => {
    return (
        <div className="flex gap-6">
            {
                LINKS.map(({ name }, index) => (
                    <Link 
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
