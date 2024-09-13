import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Drinks from "./Pages/Drinks";
function Routing(){
    return(
        <>
           <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="Order" element={<Order/>}>
                       <Route index element={<Drinks/>}></Route>
                       <Route path="Food" element={<Drinks/>}></Route>
                    </Route>
                </Route>
            </Routes>
           </BrowserRouter>
        </>
    )
}
export default Routing;