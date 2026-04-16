import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
  toast.success('card added')
  setcart([...cart,card])
   setbuy(true)
}
    return (
        <>
        <div >
           <div className=" card bg-base-100 shadow-sm">
  <figure className='flex justify-between'>
    <img
      src={card.icon}
      alt="Shoes" />
      <p>{card.tag}</p>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.description}</p>
    <p className='font-bold text-2xl'>${card.price}</p>
    <p className='flex'><Check />{card.period}</p>
    <p className='flex'><Check />{card.tag}</p>
    <p className='flex'> <Check />{card.tagType}</p>
    {/* <p>{card.features}</p> */}
    <button onClick={()=>halndlebuyebt()}
    className="btn bg-gradient-to-r from-blue-950 to-blue-500 text-white w-full">{buy===true ? 'added':'buy now'}</button>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Products;