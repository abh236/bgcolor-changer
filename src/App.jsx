import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Custom from './custom/custom.jsx'
//import Color from './custom/custom.jsx'




function App() {
   const [color ,setColor]=useState("yellow");

  return (
    
    <div className="w-full h-screen duration-200 bg-blue-50"
     style={{
      backgroundColor:color
    }}>
     
      <div className="flex fixed  top-[700px] align-center item-center  bg-white-800 p-2 rounded-xl shadow-md right-[450px]
    "
     style={{
      backgroundColor:"white"
    }}
    >
      <div>
      <button  onClick={
        ()=>
          setColor("yellow")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"yellow"}}>yellow</button>
    </div>
    <div>
      <button  onClick={
        ()=>
          setColor("green")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"green"}}>green</button>
    </div>
    <div>
      <button  onClick={
        ()=>
          setColor("blue")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"blue"}}>blue</button>
    </div>
    <div>
      <button  onClick={
        ()=>
          setColor("red")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"red"}}>red</button>
    </div>
    <div>
      <button  onClick={
        ()=>
          setColor("pink")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"orange"}}>orange</button>
    </div>
    <div>
      <button  onClick={
        ()=>
          setColor("pink")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"pink"}}>pink</button>
    </div>
    <div>
      <button  onClick={
        ()=>
          setColor("brown")
        
      } className='bg-blue-300 m-2'
      style={{backgroundColor:"brown"}}>brown</button>
    </div>
            

            

        
     
     </div>
     </div>
     
    
  )
}

export default App
