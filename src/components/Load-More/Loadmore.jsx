import React, { useEffect, useState } from "react";
import Product from "./Product";
import {FaSortDown} from "react-icons/fa"
const Loadmore = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=8&skip=${8*counter}`
    );
    const data = await response.json();
    const res = await data?.products;
    const children = products.concat(res);
    setProducts(children);
  };
  useEffect(() => {
    fetchData();
  }, [counter]);
  return (
    <div
      id="LoadMoreButton"
      className={`w-[60vw] h-auto min-h-[40vh]  flex flex-col gap-4 p-3 bg-gray-900 items-center`}
    >
      <div className="font-bold text-xl">Load More Data</div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {products?.map((product) => (
            <div key={product.id}><Product data={product} /></div>
        ))}
      </div>
    <FaSortDown className={`${products.length>=100 && 'hidden'} text-5xl hover:text-green-500 hover:scale-125 transition`} onClick={()=>setCounter((prev)=>prev+1)}/>
    </div>
  );
};

export default Loadmore;
