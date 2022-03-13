import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MainHeaderActions } from '@/components/layouts/header/MainHeaderActions'

export const MainHeader = () => {
    return (
        <>
            <div className="relative flex items-center container mx-auto">
                <div className="mr-6">
                    <Link href="/">
                        <a>
                            <Image 
                                src="/Logo.svg"
                                alt="UNIVERSAL"
                                width={242}
                                height={40}
                            />
                        </a>
                    </Link>
                </div>

                <Button>
                    Каталог
                </Button>

                <div>
                    Способы покупки
                    О компании
                    Доставка
                </div>

                <div>
                    8 (495) 228-27-36
                    Пн-Пт 9-21, Сб-Вс 9-20
                </div>

                <MainHeaderActions />
            </div>
        </>
    )
}