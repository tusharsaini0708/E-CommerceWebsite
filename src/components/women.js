import React, { useEffect, useState } from "react";
import { womensTshirt, womensHoodie } from "../data/womenData";
const Women = ({ setCart }) => {
  const [data, setData] = useState(womensTshirt);
  const [tshirt, setTshirt] = useState("selected");
  const [hoodie, setHoodie] = useState("");
  const select = (index) => {
    if (index === 1) {
      setTshirt("selected");
      setHoodie("");
    } else {
      setHoodie("selected");
      setTshirt("");
    }
  };

  useEffect(() => {
    if (tshirt !== "") setData(womensTshirt);
    else setData(womensHoodie);
  }, [tshirt, hoodie]);
  return (
    <div>
      <button
        onClick={() => select(1)}
        className={`btn selector mr-3 mb-3 ${tshirt}`}
      >
        T-Shirt's
      </button>
      <button
        onClick={() => select(2)}
        className={`btn selector mb-3 ${hoodie}`}
      >
        Hoodie's
      </button>
      <div className="row">
        {data.map((each) => (
          <div key={each.id} className="col-6 col-md-3 p-1 men">
            <div
              style={{
                backgroundImage: `url(${each.image})`,
                paddingTop: "110%",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-center">
              <p className="m-0">{each.des}</p>
              <p>
                <del className="mr-2">{each.mrp}</del>
                {each.price}
              </p>
              <button className="cartBtn btn" onClick={() => setCart(each)}>
                Add to cart<i className="ml-1 fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
