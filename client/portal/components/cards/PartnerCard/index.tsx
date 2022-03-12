import Image from 'next/image'
import SamsungLogo from 'public/images/samsung.png'

export const PartnerCard = () => {
    return (
        <div className="flex justify-center items-center h-[84px] p-4 bg-gray-100 rounded-md">
            <Image 
                src={SamsungLogo}
                alt=""
            />
        </div>
    )
}
