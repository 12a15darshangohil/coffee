import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Drinks from "./Pages/Drinks";
import Food from "./Pages/Food";
import CoffeeAtHome from "./Pages/Coffe At Home";
import Merchandise from "./Pages/Merchandies";
import Coffeculture from "./Pages/Coffeeculture";
function Routing(){
    return(
        <>
           <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="Order" element={<Order/>}>
                       <Route index element={<Drinks/>}></Route>
                       <Route path="drinks" element={<Drinks/>}></Route>
                       <Route path="Food" element={<Food/>}></Route>
                       <Route path="CoffeeAtHome" element={<CoffeeAtHome/>}></Route>
                       <Route path="Merchandise" element={<Merchandise/>}></Route>
                    </Route>
                    <Route path="Coffeculture" element={<Coffeculture/>}></Route>
                </Route>
            </Routes>
           </BrowserRouter>
        </>
    )
}
export default Routing;