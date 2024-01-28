

import { useState } from "react"
import { motion } from "framer-motion"



function App() {

  const [color, setColor] = useState("green")
  // const [colorOne, setColorOne] =  useState(false)
  // const [colorTwo, setColorTwo] = useState(false)
  const myFucntion = (myNewColor)=>{
    setColor(myNewColor)
  }

  return (
    <div className="flex  w-full h-screen items-center justify-end "
    style={{backgroundColor:color}}>
      <div className="w-32 h-2/5 rounded-full flex mr-28 "
      style= {{backgroundColor: "white"}}>
        <div className="flex flex-col font-bold justify-center items-center mx-auto gap-4">
          <button onClick={()=> myFucntion("red")}  className="bg-red-400 w-28 py-6 rounded-lg text-white">Red</button>
          <button onClick={()=> myFucntion("blue")}  className="bg-blue-500 w-28 py-6 rounded-lg">Blue</button>
          <button onClick={()=> myFucntion("cyan")}  className="bg-cyan-500 w-28 py-6 rounded-lg">Cyan</button>
        </div>

      </div>
      
    </div>










      // <div className="w-full h-full   "
      //      style={{backgroundColor:color}}>
        // <div  className="w-full h-full bg-gray-600 "
        //      style={{backgroundColor:color}}>
        //     <div className="fixed flex-wrap justify-center bottom-14 inset-x-0 mx-80 px-8">
        //         <div className="flex flex-wrap justify-center rounded-xl bg-[#5640ff] py-4 gap-3">
        //             <button onClick={()=> myFunction("green")} className="text-white font-bold  hover:bg-cyan-600 p-2 x-2 outline-offset-2 shadow-sm rounded-lg" 
        //             style={{backgroundColor:"green"}}>green</button>
        //             <button onClick={()=> myFunction("blue")} className="text-white font-bold   hover:bg-cyan-600 p-2 x-2 outline-offset-2 shadow-sm rounded-lg"  
        //             style={{backgroundColor:"blue"}}>Blue</button>
        //             <button onClick={()=> myFunction("red")} className="text-white   hover:bg-cyan-600 font-bold  p-2 x-2 outline-offset-2 shadow-sm rounded-lg"  
        //             style={{backgroundColor:"red"}}>Red</button> 
        //         </div>
        //     </div>
        // </div>
      // </div>  
  )
}

export default App
