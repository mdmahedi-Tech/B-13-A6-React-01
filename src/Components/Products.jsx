import React from 'react';
import { Check } from 'lucide';
const Products = ({card}) => {
    console.log(card)
    return (
        <>
        <div >
           <div className=" card bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.description}</p>
    <p className='font-bold text-2xl'>${card.price}</p>
    <p>{card.period}</p>
    <p>{card.tag}</p>
    <p>{card.tagType}</p>
    {/* <p>{card.features}</p> */}
    <button className="btn btn-primary w-full">Buy Now</button>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Products;