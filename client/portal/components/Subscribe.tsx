import { Button } from '@/ui/components/Button'
import { Input } from '@/ui/components/Input'

export const Subscribe = () => {
    return (
        <div className="w-[1200px] h-[154px] mx-auto bg-primary-500">
            <div className="flex justify-between items-center h-full px-[148px]">
                <div className="flex">
                    <div>
                        <Input 
                            label="имя"
                        />
                    </div>

                    <div>
                        <Input 
                            label="почта"
                        />
                    </div>
                </div>

                <Button color="secondary">
                    Подписаться
                </Button>
            </div>
        </div>
    )
}
