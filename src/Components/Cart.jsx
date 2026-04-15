import React from 'react';

const Cart = ({cart,setcart}) => {
    console.log(cart)

    const totalPrice=cart.reduce((item,setitem)=>{
        return item+setitem.price;
    },0)
    // to all clear
    const handleprocessing=()=>{
       setcart([])
    }
    // to delete card
    const handledelete=(cards)=>{
        
        const filterdcard=cart.filter(n=>n.id !== cards.id)
        setcart(filterdcard)
    }
    return (
        
        <>
        <h1 className='text-3xl font-bold container mx-auto'>your cart</h1>
        <div className='container mx-auto'>
            
            {
                cart.map(c=><div className='flex justify-between 
                items-center px-8 py-4 border' >
                    <div className='flex items-center gap-4'>
                    <img className='w-40 h-40' src={c.icon} alt="" />
                    <div>
                        <p>{c.name}</p>
                        <p className='font-bold'>${c.price}</p>
                    </div>
                    </div>
                    <button onClick={()=>handledelete(c)}
                     className='btn btn-error'>delete</button>
                </div>)
            }
            <div>
                <div className='flex justify-between items-center px-6 py-3'>
                    <p className='font-bold'>total</p>
                    <p className='font-bold'>${totalPrice}</p>
                </div>
            </div>
            <div>
            <button onClick={()=>handleprocessing()}
             className='btn bg-blue-900 w-full rounded-xl'>procecing</button>
           </div>
        </div>
        
        </>
    );
};

export default Cart;