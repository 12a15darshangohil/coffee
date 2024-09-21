import { useEffect, useState } from "react";

function Cart() {
    const [quantities, setQuantities] = useState({}); // Track quantities for each item
    const [data, setData] = useState(null);
    const [userId, setUserId] = useState(undefined);
    const [cartItems, setCartItems] = useState([]); // State to hold cart items
    const [deliveryFee, setDeliveryFee] = useState(0); // Example delivery fee

    useEffect(() => {
        fetch('http://localhost:8000/api/user-auth/')
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    setUserId(data.user.id);
                    setData(data.user);
                    setCartItems(data.user.cart || []);
                    let dummyCart=[]
                    data.user.cart.map( items =>{
                        let checkItems = true
                        console.log(items)
                        dummyCart.map( items2 =>{
                            if( items.cart_details.title == items2.cart_details.title){
                                checkItems=false
                                    items2.cart_details.quantities = items2.cart_details.quantities+1
                            }     
                        })
                        if(checkItems){
                            items.cart_details.quantities = 1;
                            dummyCart.push(items)
                        }
                    })
                    console.log(dummyCart)
                    setCartItems(dummyCart)
                    let dummyquantities={}
                    dummyCart.map(items=>{
                         dummyquantities[items.cart_details.title]=items.cart_details.quantities
                    })
                    setQuantities(dummyquantities)
                    if (data.user.cart) {
                        setDeliveryFee(100)
                    }
                    console.log("Cart data:", data.user.cart);
                } else {
                    console.log("Authentication failed:", data.message);
                }
            })
            .catch(error => console.error("Error:", error));
    }, []);

    // subtotal, total
    const subtotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.cart_details.price);
        return total + price * (quantities[item.cart_details.title] || 1);
    }, 0);
    const total = subtotal + deliveryFee;

    // Function to handle quantity changes
    const handleQuantityChange = (title, change) => {
        setQuantities(prev =>({
            ...prev,[title]:prev[title]+change
        }))
    };


    // remove from cart
    const removeItemFromCart = (itemId) => {
        let askRemove = window.confirm("Do You want to remove item from cart?")
        if (askRemove) {
            fetch(`http://localhost:8000/api/cart/remove/${itemId}/`, {
                method: 'POST'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        console.log(data.message);
                        window.location.reload(); // This will refresh the entire page
                        // Update state to reflect the item removal from the cart
                    } else {
                        console.error(data.error);
                    }
                })
                .catch(error => console.error("Error:", error));
        };
    }

    return (
        <>
            <div className='bg-[#1e3932] py-2 sm:py-6 mb-6'>
                <div className='text-white text-lg tracking-wide w-full'>
                    <div className='px-4 sm:px-0 md:w-4/5 m-auto flex justify-between items-center gap-5'>
                        <p className='text-sm sm:text-xl max-w-md sm:max-w-xl font-light'>Home &gt; Cart</p>
                    </div>
                </div>
            </div>

            {cartItems.map((item) => (
                <div key={item.cart_details.title} className='flex px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-auto w-[80%] my-[15px] scaleA'>
                    <div>
                        <img src={item.cart_details.img} alt={item.cart_details.title} className='rounded-full' style={{ maxWidth: "99px", maxHeight: "99px" }} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='px-4'>
                            <div className='text-[20px] font-bold font-serif' style={{ textOverflow: "ellipsis" }}>
                                {item.cart_details.title}
                            </div>
                            <div className='mb-6 text-[20px] font-serif font-normal'>₹ {item.cart_details.price}</div>
                            <div className="justify-between flex">
                                <div className="py-1.5 bg-[#80808014] rounded-[30px] text-[18px] font-bold text-[black] font-serif inline-block shadow-sm">
                                    <div className="inline px-4 py-2 bg-white rounded-[13px] font-extrabold" onClick={() => handleQuantityChange(item.cart_details.title, -1)}>
                                        <i className="ri-subtract-fill"></i>
                                    </div>
                                    <div className="px-5 inline">{quantities[item.cart_details.title]}</div>
                                    <div className="inline px-4 py-2 bg-white rounded-[13px] font-extrabold" onClick={() => handleQuantityChange(item.cart_details.title, 1)}>
                                        <i className="ri-add-fill"></i>
                                    </div>
                                </div>
                                <i
                                    className="ri-delete-bin-6-fill text-[#0000009e]"
                                    style={{ fontSize: "22px" }}
                                    onClick={() => removeItemFromCart(item.id)} // Call the function on click
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            {deliveryFee != 0 &&
                <>
                    <div className='flex w-[80%] flex-col px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-auto my-[15px] font-serif scaleA'>
                        <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                            <div>Subtotal</div>
                            <div>₹ {subtotal.toFixed(2)}</div>
                        </div>
                        <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                            <div>Delivery Fee</div>
                            <div>₹ {deliveryFee}</div>
                        </div>
                        <hr className="mt-3" />
                        <div className="flex justify-between w-full px-4 font-serif text-[23px] font-bold text-[#000000cb] my-2">
                            <div>Total</div>
                            <div>₹ {total.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="w-[80%] mx-auto bg-[#979797] px-4 py-5 text-center rounded-[15px] text-white item_container font-bold text-[19px] mb-14" onClick={() => { alert("Order Placed Successfully"); }}>
                        Place Order
                    </div>
                </>
            }

            {deliveryFee == 0 &&
                <>
                    <div className="text-green-700 text-center mt-4 font-bold text-[19px]">
                        No items found. Please explore.
                    </div>
                </>
            }
        </>
    );
}

export default Cart;
