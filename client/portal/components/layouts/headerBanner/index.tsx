import React from 'react'
import { Button } from '@/components/ui/Button'

export const HeaderBanner = () => {
    return (
        <a 
            className="block w-full h-[56px] bg-primary-200"
            href="/test"
        >
            <div className="flex justify-center items-center h-full container mx-auto">
                200 бонусов за покупки

                <Button 
                    className="ml-6"
                    size="small"
                    color="secondary"
                >
                    Посмотреть
                </Button>
            </div>
        </a>
    )
}
