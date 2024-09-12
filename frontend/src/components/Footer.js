import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CgFacebook } from "react-icons/cg"
const Footer =()=>{
    return(
        <>
        <div className='bg-[#0e382c] w-full py-5 hidden sm:block'>
            <div className='p-8 px-4 sm:px-0 md:w-4/5 m-auto relative mt-3 '>
                <div className='grid grid-cols-6'>
                    <div className='min-w-[50px]'>
                        <img src={`${process.env.PUBLIC_URL}/Logo.png`} className="w-16" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <a to={""} className="font-bold text-lg mb-4">AboutUS</a>
                        <a to={""} className="text-sm mb-4">Our Heritage</a>
                        <a to={""} className="text-sm mb-4">Our Company</a>
                        <a to={""} className="text-sm mb-4">Coffee house</a>
                    </div>
                    <div className='flex flex-col text-white'>
                        <a to={""} className="font-bold text-lg mb-4">Responsibility</a>
                        <a to={""} className="text-sm mb-4">Community</a>
                        <a to={""} className="text-sm mb-4">Ethical Sourcing</a>
                        <a to={""} className="text-sm mb-4">Enviroment</a>
                        <a to={""} className="text-sm mb-4">Diversity</a>
                    </div>
                    <div className='flex flex-col text-white'>
                        <a to={""} className="font-bold text-lg mb-4">Quick as</a>
                        <a to={""} className="text-sm mb-4">Carees</a>
                        <a to={""} className="text-sm mb-4">Season's Gifting</a>
                        <a to={""} className="text-sm mb-4">FAQs</a>
                        <a to={""} className="text-sm mb-4">Customer Service</a>
                        <a to={""} className="text-sm mb-4">Delivery</a>
                    </div>
                    <div className='flex flex-col text-white'>
                        <a to={""} className="font-bold text-lg mb-4">SOCIAL MEDIA</a>
                        <div className='flex gap-5 text-2xl'>
                            <a href='#'><BsInstagram /></a>
                            <a href='#'><CgFacebook /></a>
                            <a href='#'><BsTwitter /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {/* <a href='https://apps.apple.com/in/app/starbucks-india/id1210203958'>
                            <img src={appstoreiOSImage} />
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=com.starbucks.in'>
                            <img src={appstoreAndroidImage} />
                        </a> */}
                    </div>
                </div>

                <div className='border-t border-solid mt-7 text-gray-100 py-3 flex justify-between'>
                        <div className='text-sm'>
                            <a to={""} className="pr-5 border-r">Web Accessiblity</a>
                            <a to={""} className="pr-3 pl-3 border-r">Privacy Statement</a>
                            <a to={""} className="pr-3 pl-3 border-r">Terms of Use</a>
                            <a to={""} className="pr-3 pl-3">Contact Us</a>
                        </div>
                        <p className='text-xs'>© 2023 Borcelle Coffee Company. All rights reserved.</p>
                </div>
            </div>

        </div>
        </>
    )
}
export default Footer;