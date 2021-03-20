import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./fontAwesome.scss";
import Navbar from "./components/navbar";
import Header from "./components/header";
//import Slider from "./components/slider";
import Content from "./components/content";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  let [cart, setCartData] = useState([]);

  const setCart = (data) => {
    let flag = 1;
    // console.log(cart);
    for (var i = 0; i < cart.length; i++) if (cart[i].id === data.id) flag = 0;

    if (flag) setCartData([...cart, data]);
  };
  const deleteCart = (id) => {
    const temp = cart.filter((each) => each.id !== id);
    setCartData(temp);
  };

  return (
    <div>
      <Navbar cart={cart} deleteCart={deleteCart} />
      <Header />
      <Content setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
