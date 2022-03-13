import React from 'react'

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
                    <div key={index}>
                        {name}
                    </div>
                ))
            }
        </div>
    )
}
