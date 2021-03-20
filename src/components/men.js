import React, { useEffect, useState } from "react";
import { mensFull, mensHalf } from "../data/menData";
const Men = ({ setCart }) => {
  const [data, setData] = useState(mensFull);
  const [full, setFull] = useState("selected");
  const [half, setHalf] = useState("");
  const select = (index) => {
    if (index === 1) {
      setFull("selected");
      setHalf("");
    } else {
      setHalf("selected");
      setFull("");
    }
  };

  useEffect(() => {
    if (full !== "") setData(mensFull);
    else setData(mensHalf);
  }, [full, half]);
  return (
    <div>
      <button
        onClick={() => select(1)}
        className={`btn selector mr-3 mb-3 ${full}`}
      >
        Full Sleeve
      </button>
      <button onClick={() => select(2)} className={`btn selector mb-3 ${half}`}>
        Half Sleeve
      </button>
      <div className="row">
        {data.map((each) => (
          <div key={each.id} className="col mx-2 p-1 men">
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
              <button className="cartBtn btn " onClick={() => setCart(each)}>
                Add to cart<i className="ml-1 fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
