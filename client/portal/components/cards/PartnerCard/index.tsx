import Image from 'next/image'
import SamsungLogo from 'public/images/samsung.png'

export const PartnerCard = () => {
    return (
        <div className="flex justify-center items-center h-[84px] p-[48px] border-r last:border-none bg-gray-100 
        dark:bg-dark-400 dark:text-white dark:border-dark-300">
            <Image 
                className="backdrop-grayscale"
                src={SamsungLogo}
                alt=""
            />
        </div>
    )
}
