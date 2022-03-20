import { Button } from '@/ui/components/Button'

export const Subscribe = () => {
    return (
        <div className="w-[1200px] h-[154px] mx-auto bg-primary-500">
            <div className="flex justify-between items-center h-full px-[148px]">
                <div className="flex">
                    <div>
                        name
                    </div>

                    <div>
                        email
                    </div>
                </div>

                <Button color="secondary">
                    Подписаться
                </Button>
            </div>
        </div>
    )
}
