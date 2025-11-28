import { useState } from "react"
import ColorButton from "./components/ColorButton"


function App() {

  const AllColors = ["red" , "green" ,"purple","olive","orange","black","lightblue"]

  const [color , setColor] = useState(AllColors[0])
  return (
    <div className="w-full h-screen duration-200"
    style={{
      backgroundColor:color
    }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-2xl bg-white justify-center px-3 py-2 rounded-2xl">
            {AllColors.map(clr => (
            <ColorButton
            color={clr}
            text={clr.toUpperCase()}
            onClick={()=>setColor(clr)}/>
          ))}
          {/* <ColorButton color="red" text="RED"/> */}
        </div>
      </div>
    </div>
    
  )
}

export default App
