import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(15)

  // let counter = 5

  const addValue=()=>{
    //counter ++  
    // console.log('clicked for increase',counter)
    
    if(counter === 20){
      alert('You cannot exceed more')
      return
    }
      setCounter(counter + 1)
    
  }

  const removeValue=()=>{
    if(counter === 0){
      alert('Cannot decrement more')
      return
    }
    setCounter(counter-1)
  }

  const resetValue = () => {
    setCounter(15)
  }
  
  return (
    <>
      <h1>Dhruv Wadhwani</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={resetValue}>Reset Button</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App

// <button onClick={addValue()}>Add Value</button>
// you dont call you just pass the refrence addvalue only 
