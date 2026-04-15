
import './App.css'
import Nabbar from './Components/Home/Nabbar'
import Banner from './Components/Home/Banner'
import Allcards from './Components/Allcards'
import { Suspense } from 'react'

function App() {
  const fetchData=async()=>{
    const res=await fetch('Data.json')
    return res.json()
  }
   const fetchPromise=fetchData()
   //console.log(fetchPromise)

  return (
     <>
    
   <Nabbar></Nabbar>
   <Banner></Banner>
   
    {/* tabs start */}
   

    {/* tabs end */}
    <Suspense fallback={<h1>data is loading</h1>}>
    <Allcards fetchPromise={fetchPromise}>

   </Allcards>
   </Suspense>
  
   </>
  )
}

export default App
