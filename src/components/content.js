import React from "react";
import Men from "./men";
import Women from "./women";

const Content = ({ setCart }) => {
  return (
    <div className="container mt-2">
      <hr></hr>
      <Men setCart={setCart} />
      <hr></hr>
      <Women setCart={setCart} />
      <br></br>
    </div>
  );
};

export default Content;
