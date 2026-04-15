import React, { useState } from 'react';
import { Check } from 'lucide';
const Products = ({card,cart,setcart}) => {
   // console.log(cart)
 const [buy,setbuy]=useState(false)

//  btn handle function
const halndlebuyebt=()=>{
  //console.log(card)
  // const filterdcard=cart.filter(item=>item.id===card.id)
   //console.log(filterdcard)
  //  setcart([...cart,filterdcard])
  //  console.log(cart)
  setcart([...cart,card])
   setbuy(true)
}
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
    <button onClick={()=>halndlebuyebt()}
    className="btn btn-primary w-full">{buy===true ? 'added':'buy now'}</button>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Products;