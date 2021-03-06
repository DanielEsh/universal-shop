import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/ui/components/Button'
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

                <Button className="mr-6">
                    Каталог
                </Button>

                <MainHeaderActions />
            </div>
        </>
    )
}