import React, { useState, useEffect } from "react";

import Mycard from "./Mycard";
import Shmmer from "./Shmmer";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return products.length === 0 ? (
    <Shmmer />
  ) : (
    <>
      <div className="row" style={{ textAlign: "center" }}>
        {products.map((ele) => (
          <Mycard
            key={ele.id}
            title={ele.title}
            Img={ele.image}
            descrip={ele.description}
            price={ele.price}
            obj={ele}
            EleId={ele.id}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
