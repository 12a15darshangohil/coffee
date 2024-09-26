import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
            <div className='bg-[#1e3932] py-2 sm:py-6'>
                <div className=' text-white  text-lg tracking-wide w-full'>
                    <div className='px-4  sm:px-0 md:w-4/5 m-auto flex justify-between items-center gap-5'>
                        <p className='text-sm sm:text-xl max-w-md sm:max-w-xl font-light'>A world of rewards awaits you! Sign up now.</p>
                        {/* <Link to={"/rewards"} className='text-sm border-2 px-2 py-1 rounded-full whitespace-nowrap'>Know More</Link> */}
                    </div>
                </div>
            </div>

                  {/* Handcrafted Curations */}
      <div className='bg-white py-14 rounded-b-[25px] shadow-md'>
        <div className='px-2  sm:px-0 md:w-4/5 m-auto'>
          <h1 className='text-[#1e3932] text-2xl font-bold mb-6'>Handcrafted Curations</h1>
          <div className='flex items-center text-center flex-wrap justify-around'>
                  <a className="flex justify-center items-center flex-col  " >
                    <Link to="Order"><img src={"https://www.starbucks.in/assets/icon/Bestseller.webp"} className="w-32 h-32 drop-shadow-xl sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1 scaleA" /></Link>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap mt-2 '>Bestseller</p>
                  </a>

                  <a className="flex justify-center items-center flex-col " >
                    <Link to="Order/drinks"><img src={"	https://www.starbucks.in/assets/icon/Drinks.webp"} className="w-32 h-32 drop-shadow-xl  sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1 scaleA" /></Link>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap mt-2 '>Drinks</p>
                  </a>

                  <a className="flex justify-center items-center flex-col " >
                    <Link to="/Order/Food"><img src={"https://www.starbucks.in/assets/icon/Food.webp"} className="w-32 h-32 drop-shadow-xl  sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1 scaleA" /></Link>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap mt-2 '>Food</p>
                  </a>

                  <a className="flex justify-center items-center flex-col " >
                    <Link to="/Order/Merchandise"><img src={"https://starbucksstatic.cognizantorderserv.com/Items/Small/114615_1.png"} className="w-32 h-32 drop-shadow-xl  sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1 scaleA" /></Link>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap mt-2 '>Merchandise</p>
                  </a>

                  <a className="flex justify-center items-center flex-col " >
                    <Link to="/Order/CoffeeAtHome"><img src={"https://www.starbucks.in/assets/icon/CoffeeAtHome.webp"} className="w-32 h-32 drop-shadow-xl  sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1 scaleA" /></Link>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap mt-2 '>Coffee At Home</p>
                  </a>

                  <a className="flex justify-center items-center flex-col " >
                    <Link to="/Order/ReadyToEat"><img src={"https://www.starbucks.in/assets/icon/ReadyToEat.webp"} className="w-32 h-32 drop-shadow-xl sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full hover:border-2 border-green-600 border-solid m-1 scaleA" /></Link>
                    <p className='font-medium text-sm whitespace-normal sm:whitespace-nowrap mt-2 '>Ready To Eat</p>
                  </a>
          </div>
        </div>
      </div>


{/* Barista Recommends */}
<div className="h-[300px] py-7 ">
        <div className='px-4 md:px-0  sm:px-0 md:w-4/5 m-auto relative'>
          <h1 className='text-[#1e3932] text-2xl font-bold mb-4'>Barista Recommends</h1>
          <div className='my-10'>
            <div className='flex gap-2 md:gap-6 overflow-x-scroll w-full absolute top-16 sm:px-4 scrollbar-none'  >
                    <div className='w-full bg-white border max-w-sm min-w-[400px] sm:min-w-[425px] py-4 px-5 box-border rounded-[8px] border-slate-400 BOX mb-4' style={{borderColor:"rgba(0, 0, 0, .175)"}}>
                      <div className='flex gap-4'>
                        <img src={"#"} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                        <div>
                          <img src={'#'} className='' />
                          <h3 className='font-semibold'>{"OK"}</h3>
                          <p className='text-xs text-gray-400'>OK</p>
                        </div>
                      </div>
                      <div className='flex justify-between font-semibold my-2' style={{alignItems:"center"}}>
                        <p>₹ <span>{"ok"}</span></p>
                        <button className='text-white bg-[#00754A] hover:bg-[#1e3932] px-6 py-2 rounded-full text-[12px] ADD_item_Btn'>Add Item</button>
                      </div>
                    </div>


                    <div className='w-full bg-white border max-w-sm min-w-[400px] sm:min-w-[425px] py-4 px-5 box-border rounded-[8px] border-slate-400 BOX mb-4' style={{borderColor:"rgba(0, 0, 0, .175)"}}>
                      <div className='flex gap-4'>
                        <img src={"#"} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                        <div>
                          <img src={'#'} className='' />
                          <h3 className='font-semibold'>{"OK"}</h3>
                          <p className='text-xs text-gray-400'>OK</p>
                        </div>
                      </div>
                      <div className='flex justify-between font-semibold my-2' style={{alignItems:"center"}}>
                        <p>₹ <span>{"ok"}</span></p>
                        <button className='text-white bg-[#00754A] hover:bg-[#1e3932] px-6 py-2 rounded-full text-[12px] ADD_item_Btn'>Add Item</button>
                      </div>
                    </div>


                    <div className='w-full bg-white border max-w-sm min-w-[400px] sm:min-w-[425px] py-4 px-5 box-border rounded-[8px] border-slate-400 BOX mb-4' style={{borderColor:"rgba(0, 0, 0, .175)"}}>
                      <div className='flex gap-4'>
                        <img src={"#"} className='w-20 bg-red-500 h-20 rounded-md object-cover' />
                        <div>
                          <img src={'#'} className='' />
                          <h3 className='font-semibold'>{"OK"}</h3>
                          <p className='text-xs text-gray-400'>OK</p>
                        </div>
                      </div>
                      <div className='flex justify-between font-semibold my-2' style={{alignItems:"center"}}>
                        <p>₹ <span>{"ok"}</span></p>
                        <button className='text-white bg-[#00754A] hover:bg-[#1e3932] px-6 py-2 rounded-full text-[12px] ADD_item_Btn'>Add Item</button>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>


      < section className='rounded-t-[30px] shadow-md' style={{backgroundColor:"white"}} >
        <div className='p-8 px-2 sm:px-0 md:w-4/5 m-auto relative mt-3'>
          <div className='flex  items-center w-full justify-between '>
            <h1 className='text-[#1e3932] text-2xl font-bold m-0'>Learn more about the world of coffee!</h1>
            <button className='text-green-800 font-semibold m-0'>Discover More</button>
          </div>

          <div className='h-96 w-full my-10 rounded-[10px] overflow-hidden relative cursor-pointer'>
            <img src={'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg'} className="h-full w-full object-cover" />
            <div className='h-full bg-black bg-opacity-40 hover:bg-opacity-70 w-full absolute top-0 transition-all p-7 flex flex-col justify-between'>
              <p className='bg-green-50 rounded-[5px] w-24 text-[12px] p-1 font-bold text-green-600 text-center'>Coffee Culture</p>
              <div className='text-white'>
                <h2 className='text-3xl font-bold py-5 text-white'>Art & Science Of Coffee Brewing</h2>
                <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
                <Link to="/Coffeculture"><button className='bg-white text-black w-full max-w-[200px] font-semibold text-sm py-2 rounded-full mt-8'>Learn More</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center sm:hidden'>
          <button className='bg-black text-white font-bold px-3 py-1 rounded-full'>Discover More</button>
        </div>
      </section >
      <Footer/>
    </>
    )
}
export default Home;