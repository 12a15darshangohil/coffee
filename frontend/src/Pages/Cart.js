import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Cart() {
    const [quantities, setQuantities] = useState({}); // Track quantities for each item
    const [data, setData] = useState(null);
    const [userId, setUserId] = useState(undefined);
    const [cartItems, setCartItems] = useState([]); // State to hold cart items
    const [deliveryFee, setDeliveryFee] = useState(0); // Example delivery fee
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('http://localhost:8000/api/user-auth/', {
            method: 'GET',
            credentials: 'include', // Include credentials (e.g., cookies) if needed
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    setUserId(data.user.id);
                    setData(data.user);
                    setCartItems(data.user.cart || []);
                    let dummyCart = []
                    data.user.cart.map(items => {
                        let checkItems = true
                        console.log(items)
                        dummyCart.map(items2 => {
                            if (items.cart_details.title == items2.cart_details.title) {
                                checkItems = false
                                items2.cart_details.quantities = items2.cart_details.quantities + 1
                            }
                        })
                        if (checkItems) {
                            items.cart_details.quantities = 1;
                            dummyCart.push(items)
                        }
                    })
                    console.log(dummyCart)
                    setCartItems(dummyCart)
                    let dummyquantities = {}
                    dummyCart.map(items => {
                        dummyquantities[items.cart_details.title] = items.cart_details.quantities
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
    }, [change]);

    // subtotal, total
    const subtotal = cartItems.reduce((total, item) => {
        const price = parseFloat(item.cart_details.price);
        return total + price * (quantities[item.cart_details.title] || 1);
    }, 0);
    const total = subtotal + deliveryFee;


    const addToCart = async (item) => {
        const cartItem = {
            user_id: userId,
            cart_details: {
                title: item.cart_details.title,
                price: item.cart_details.price,
                img: item.cart_details.img,
            }
        };

        await fetch('http://localhost:8000/api/coffee-cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Item added to cart successfully:", data);
            })
            .catch(error => {
                console.error("Error adding item to cart:", error);
            });
        if (change) {
            setChange(0)
        }
        else {
            setChange(1)
        }
    };

    // remove from cart
    const removeItemFromCart = async (title, ress) => {
        if (ress) {
            let askRemove = window.confirm("Do You want to remove item from cart?")
            if (askRemove) {
                await fetch(`http://localhost:8000/api/cart/remove/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ Itemtitle: title, res: true })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message) {
                            console.log(data.message);
                            if (cartItems.length == 1)
                                window.location.reload();
                        } else {
                            console.error(data.error);
                        }
                    })
                    .catch(error => console.error("Error:", error));
                if (change) {
                    setChange(0)
                }
                else {
                    setChange(1)
                }
            };
        }
        else {
            await fetch(`http://localhost:8000/api/cart/remove/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Itemtitle: title, res: false })
            })
                .then(response => response.json())
                .then(data => {

                    if (data.message) {
                        console.log(data.message);
                        console.log(cartItems.length)
                    } else {
                        console.error(data.error);
                    }
                })
                .catch(error => console.error("Error:", error));
            if (change) {
                setChange(0)
            }
            else {
                setChange(1)
            }
        }
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
                                    <div className="inline px-4 py-2 bg-white rounded-[13px] font-extrabold hover:bg-[#00754A] hover:text-white" onClick={() => removeItemFromCart(item.cart_details.title, false)}>
                                        <i className="ri-subtract-fill"></i>
                                    </div>
                                    <div className="px-5 inline">{quantities[item.cart_details.title]}</div>
                                    <div className="inline px-4 py-2 bg-white rounded-[13px] font-extrabold hover:bg-[#00754A] hover:text-white" onClick={() => addToCart(item)}>
                                        <i className="ri-add-fill"></i>
                                    </div>
                                </div>
                                <i
                                    className="ri-delete-bin-6-fill text-[#0000009e] hover:text-[#ff0000dd]"
                                    style={{ fontSize: "22px" }}
                                    onClick={() => removeItemFromCart(item.cart_details.title, true)} // Call the function on click
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            {deliveryFee != 0 &&
                <>
                    <div className='flex w-[80%] flex-col px-4 bg-[#F9F9F9] py-5 rounded-[15px] item_container mx-auto my-[15px] scaleA'>
                        <div className="flex justify-between w-full px-4 font-bold text-[#000000cb] font-serif mb-3">
                            <div>Bill Details</div>
                        </div>
                        <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                            <div>Item total</div>
                            <div className="font-serif">₹ {subtotal.toFixed(2)}</div>
                        </div>
                        <div className="flex justify-between w-full px-4 font-bold text-[#8080807f] mb-1.5">
                            <div>Delivery Fee</div>
                            <div className="font-serif">₹ {deliveryFee}</div>
                        </div>
                        <hr className="mt-3" />
                        <div className="flex justify-between w-full px-4  text-[18px] font-bold text-[#000000cb] my-2 font-serif">
                            <div>GRAND TOTAL</div>
                            <div>₹ {total.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="w-[80%] mx-auto bg-[#00754A] px-4 py-5 text-center rounded-[15px] text-white item_container font-bold text-[19px] mb-14" onClick={() => { alert("Order Placed Successfully"); }}>
                        Place Order
                    </div>
                </>
            }

            {deliveryFee == 0 &&
                <>
                    <div className="text-center mt-4 font-semibold text-[20px] w-full text-[#000000b7]">
                        <img src='https://www.starbucks.in/assets/images/noSearchFound.svg' className="mx-auto" />
                        <div className="mt-7">No items found. Please explore.</div>
                    </div>
                </>
            }
        </>
    );
}

export default Cart;
