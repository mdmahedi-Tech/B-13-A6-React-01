import React, { use, useState } from 'react';
import Cart from './Cart';
import Products from './Products';

const Allcards = ({fetchPromise,cart,setcart}) => {
    const allCards=use(fetchPromise)
    //console.log(allCards)
   const [btn,setbtn]=useState('products')
    return (
    //   title and button is design here
       <>
       
       <div>
        <div className='text-center space-y-3'>
            <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className='opacity-80'>Choose from our curated collection of premium digital productsbr <br />
                 designed to boost your productivity and creativity.</p>
        </div>
       </div>
       {/* tabs */}
       <div 
       className="tabs tabs-box flex justify-center items-center py-8">
         
         <button onClick={()=>setbtn('products')}
       
         className={`btn btn-ghost ${btn === 'products' ? 'bg-gradient-to-r from-blue-950 to-blue-500  ':''}`}>
            products</button>

         <button onClick={()=>setbtn('carts')}
          className={`btn ghost ${btn === 'carts' ? 'bg-gradient-to-r from-blue-950 to-blue-500 ':''}`}>
           carts({cart.length})</button>
         
         
       </div>
       {
        btn === 'products' ?  <div className='container mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
       {
        allCards.map(card=><Products card={card} cart={cart}setcart={setcart}>
            
        </Products>)
       }
       </div> :( <Cart cart={cart}setcart={setcart}></Cart>)
       }
      
      
       </>
    );
};

export default Allcards;