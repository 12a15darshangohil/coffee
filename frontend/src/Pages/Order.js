import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
const Order =()=>{
    useEffect(()=>{
        document.body.className="Order_Body";
    })
    return(
        <>

            <div className='bg-[#1e3932] py-2 sm:py-6'>
                <div className=' text-white  text-lg tracking-wide w-full'>
                    <div className='px-4  sm:px-0 md:w-4/5 m-auto flex justify-between items-center gap-5'>
                        <p className='text-sm sm:text-xl max-w-md sm:max-w-xl '>Home  &gt;  Order</p>
                        {/* <Link to={"/rewards"} className='text-sm border-2 px-2 py-1 rounded-full whitespace-nowrap'>Know More</Link> */}
                    </div> 
                </div>
            </div>

            <div className="flex w-full py-4 bg-[#F2F0EB] m-auto border-b-[#DEE2E6] border-b-2 ">
                 <ul className="px-4  sm:px-0 md:w-4/5 m-auto flex items-center gap-5 text-[#0000007d] ">
                    <li className="pr-[40px] border-r border-r-[#D5D3CE]"><Link to="/Order">Bestseller</Link></li>
                    <li className="px-[40px] border-r border-r-[#D5D3CE]"><Link to="">Drinks</Link></li>
                    <li className="px-[40px] border-r border-r-[#D5D3CE]"><Link to="Food">Food</Link></li>
                    <li className="px-[40px] border-r border-r-[#D5D3CE] "><Link to="Merchandise">Merchandise</Link></li>
                    <li className="px-[40px] "><Link to="CoffeeAtHome">Coffee At Home</Link></li>
                 </ul>
            </div>
            <Outlet/>
        </>
    )
}
export default Order;