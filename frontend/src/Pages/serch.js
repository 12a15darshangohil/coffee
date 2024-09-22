import { useEffect, useState } from "react";
const Serch = () => {
    let [FinalData, setFinalData] = useState([])
    const [FinalList, setFinalList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                document.body.className = "serch_body";
                let Data = [];

                // Fetch drinks data
                const drinkResponse = await fetch("http://127.0.0.1:8000/api/drink/");
                const drinkData = await drinkResponse.json();
                Data = [...Data, ...drinkData];

                // Fetch food data
                const foodResponse = await fetch("http://127.0.0.1:8000/api/food/");
                const foodData = await foodResponse.json();
                Data = [...Data, ...foodData];

                // Fetch merchandise data
                const merchandiseResponse = await fetch("http://127.0.0.1:8000/api/merchandise/");
                const merchandiseData = await merchandiseResponse.json();
                Data = [...Data, ...merchandiseData];

                // Fetch coffee at home data
                const coffeeAtHomeResponse = await fetch("http://127.0.0.1:8000/api/coffee-at-home/");
                const coffeeAtHomeData = await coffeeAtHomeResponse.json();
                Data = [...Data, ...coffeeAtHomeData];

                // Fetch ready-to-eat data
                const readyToEatResponse = await fetch("http://127.0.0.1:8000/api/ready-to-eat/");
                const readyToEatData = await readyToEatResponse.json();
                Data = [...Data, ...readyToEatData];

                setFinalData(Data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const searching = () => {
        let DummyList = [];
        let value = document.getElementById("serch").value.toLowerCase();
        let searchTerms = value.split(" ");

        FinalData.map(items => {
            let titleWords = items.title.toLowerCase().split(" ");
            let Confirm = false
            searchTerms.map(term => {
                if (titleWords.includes(term)) {
                    Confirm = true
                }
            });
            if (Confirm) {
                DummyList.push(items)
            }
        });
        if (value == "") {
            setFinalList([])
        } else {
            setFinalList(DummyList);
        }
        console.log(value)
    };
    return (<>
        <div className="w-[80%] m-auto my-3 text-[#000000a4]"> Home  &gt;  Searches    </div>
        <div className='bg-[#1e3932] py-2 sm:py-6'>
            <div className=' text-white  text-lg tracking-wide w-full'>
                <div className='px-4  sm:px-0 md:w-4/5 m-auto flex justify-between items-center gap-5'>
                    <img src="	https://www.starbucks.in/assets/icon/search.svg" className=""></img>
                    <input type="text" id="serch" className='text-sm w-full bg-white border-none rounded-[20px] outline-none p-4 text-[black]' placeholder="Looking for something specific ?" onChange={searching} />
                </div>
            </div>
        </div>
        <div>
            <div className=" sm:px-0 md:w-4/5 m-auto flex flex-wrap items-center mb-24 mt-8 ">
                {FinalList.map(food => {
                    return (
                        <>

                            <div className='flex w-[420px]  px-4 bg-[#F9F9F9] py-5 rounded-[8px] item_container mr-[28px] my-[15px] scaleA'>
                                <div>
                                    <img src={food.img}
                                        className='rounded-full'
                                        style={{ maxWidth: "99px", maxHeight: "99px" }}
                                        alt={food.title}
                                    />
                                </div>
                                <div className='flex flex-col '>
                                    <div className='px-4 mb-[5px]' style={{ minHeight: "150px" }}>
                                        {food.nonVeg &&
                                            <>
                                                <div className='mb-1'>
                                                    <img src="https://www.starbucks.in/assets/icon/nonveg.svg" alt="nonveg-item" style={{ width: '16px', height: '16px' }} />
                                                </div>
                                            </>
                                        }
                                        {!food.nonVeg &&
                                            <>
                                                <div className='mb-1'>
                                                    <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="veg-item" style={{ width: '16px', height: '16px' }} />
                                                </div>
                                            </>
                                        }
                                        <div className='mb-1.5 text-[18px] font-medium'>
                                            {food.title}
                                        </div>
                                        <div className='mb-2 text-[13px] FontKCL text-[#21252963]'>
                                            {food.kcal}
                                        </div>
                                        <div className='mb-2 text-[13px] font-normal text-[#21252976] FontTitle'>
                                            {food.text}
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between px-3'>
                                        <div className='text-[20px] font-serif font-normal '>₹ {food.price}</div>
                                        <div className='px-6 py-2 bg-[#979797] rounded-[30px] text-[14px] font-bold text-[#C6C6C6] Add_item'>Add Item</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>

    </>)
}
export default Serch;