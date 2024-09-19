import { useEffect, useState } from "react";

function Cart() {
    let [quantity, setQuantity] = useState(0);
    useEffect(() => {
        document.body.className = "Order_Body"
    }

    )
    return (
        <>
            <div className='bg-[#1e3932] py-2 sm:py-6 mb-6'>
                <div className=' text-white  text-lg tracking-wide w-full'>
                    <div className='px-4  sm:px-0 md:w-4/5 m-auto flex justify-between items-center gap-5'>
                        <p className='text-sm sm:text-xl max-w-md sm:max-w-xl font-light'>Home  &gt;  Cart</p>
                    </div>
                </div>
            </div>
            <div className='flex px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-auto w-[80%] my-[15px] scaleA'>
                <div>
                    <img src={true ? "https://starbucksstatic.cognizantorderserv.com/Items/Small/108056.jpg" : ''}
                        className='rounded-full'
                        style={{ maxWidth: "99px", maxHeight: "99px" }}
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <div className='px-4'>
                        <div className='text-[20px] font-bold font-serif ' style={{ textOverflow: "ellipsis" }}>
                            Creamy Spinach and Corn Pocket
                        </div>
                        <div className=' mb-6 text-[20px] font-serif font-normal'>₹ 123.45</div>
                        <div className="justify-between flex">
                            <div className="py-1.5 bg-[#80808014] rounded-[30px] text-[18px] font-bold text-[black] font-serif inline-block shadow-sm"><div className="inline px-4 py-2 bg-white rounded-[13px] font-extrabold" onClick={() => {
                                if (quantity > 0) {

                                    setQuantity(quantity - 1)
                                }

                            }}><i className="ri-subtract-fill"></i></div><div className="px-5 inline">{quantity}</div><div className="inline px-4 py-2 bg-white rounded-[13px] font-extrabold" onClick={() => {
                                setQuantity(quantity + 1)
                            }}><i className="ri-add-fill"></i></div></div>
                            <i class="ri-delete-bin-6-fill text-[#0000009e]" style={{ fontSize: "22px" }}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-[80%] flex-col px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-auto my-[15px] font-serif scaleA'>
                <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                    <div>Subtotatal</div>
                    <div>123</div>
                </div>
                <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                    <div>Delivery Fee</div>
                    <div>123</div>
                </div>
                <hr className="mt-3"/>
                <div className="flex justify-between w-full px-4 font-serif text-[23px] font-bold text-[#000000cb] my-2">
                    <div>Total</div>
                    <div>123</div>
                </div>
            </div>
            <div className="w-[80%] mx-auto bg-[#979797] px-4 py-5 text-center rounded-[15px] text-white item_container font-bold text-[19px]" onClick={()=>{alert("Order Place Succesfully")}}>
                Place Order
            </div>
        </>
    )
}
export default Cart;