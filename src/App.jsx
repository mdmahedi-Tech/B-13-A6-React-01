
import './App.css'
import Nabbar from './Components/Home/Nabbar'
import Banner from './Components/Home/Banner'
import Allcards from './Components/Allcards'
import { Suspense, useState } from 'react'

function App() {
  const fetchData=async()=>{
    const res=await fetch('Data.json')
    return res.json()
  }
   const fetchPromise=fetchData()
   //console.log(fetchPromise)
  //  state for passing data to cart
  const [cart,setcart]=useState([])
  //console.log(cart)

  return (
     <>
    
   <Nabbar></Nabbar>
   <Banner></Banner>
   
    {/* tabs start */}
   

    {/* tabs end */}
    <Suspense fallback={<h1>data is loading</h1>}>
    <Allcards fetchPromise={fetchPromise}
    cart={cart}setcart={setcart}>

   </Allcards>
   </Suspense>
  
   </>
  )
}

export default App
