import { useEffect,useState } from "react";
const Merchandise = () =>{
    const [Merchandise, setMerchandise] = useState([]);
    useEffect(() => {
        // Step 2: Fetch data from API
        fetch("http://127.0.0.1:8000/api/merchandise/")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMerchandise(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return(
        <>
            <div className="sm:px-0 md:w-4/5 m-auto ">
                <p className="font-bold text-[#000000c4] mt-20 text-[18px] ">Mugs</p>
                <p className="text-[#000000af] mt-2 mb-7">Artistic collection of ceramic mugs with acacia wood lids.</p>
            </div>
        <div className=" sm:px-0 md:w-4/5 m-auto flex flex-wrap items-center mb-24 ">
            {
                Merchandise.map((Merchandise,index)=>{
                    return(
                    <>
                    <div key={index} className='flex w-[420px]  px-4 bg-[#F9F9F9] py-5 rounded-[8px] item_container mr-[28px] my-[15px] scaleA'>
                    <div>
                        <img src={Merchandise.img} className='rounded-full ' style={{ maxWidth: "99px", maxHeight: "99px" }} />
                    </div>
                    <div className='flex flex-col '>
                        <div className='px-4 mb-[5px]' style={{ minHeight: "150px" }}>
                            <div className='mb-1.5 text-[18px] font-medium mt-3 '>
                                {Merchandise.title}
                            </div>
                            <div className='mb-2 text-[13px] font-normal  text-[#2125297e] FontTitle '>
                                {Merchandise.text}
                            </div>
                        </div>
                        <div className='flex flex-row justify-between px-3'>
                            <div className='text-[20px] font-serif'>&#8377; {Merchandise.price}</div>
                            <div className='px-6 py-2 bg-[#979797] rounded-[30px] text-[14px] font-bold text-[#C6C6C6] Add_item'>Add Item</div>
                        </div>
                    </div>
                </div>
                </>
                )
                })
            }
        </div>    
        </>
    )
}
export default Merchandise;