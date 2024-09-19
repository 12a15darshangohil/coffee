import { useState } from "react";

function Cart(){
  let [quantity,setQuantity]=useState(0);
  return(
    <>
          <div className='flex px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-[28px] my-[15px] scaleA'>
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
          <div className='flex flex-col px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-[28px] my-[15px] font-serif'>
              <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                  <div>Subtotatal</div>
                  <div>123</div>
              </div>
              <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                  <div>Delivery Fee</div>
                  <div>123</div>
              </div>
              <hr/>
              <div className="flex justify-between w-full px-4 font-serif text-[23px] font-bold text-[#000000cb] my-2">
                  <div>Total</div>
                  <div>123</div>
              </div>
          </div>
    </>
  )
}
export default Cart;