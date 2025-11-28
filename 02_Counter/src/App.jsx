import { useState } from 'react'
import './App.css'

function App() {

  const [counter , setCounter] = useState(15)

  // let counter = 5

  const addValue=()=>{
    //counter ++  
    // console.log('clicked for increase',counter)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      setCounter((prevCounter)=>(prevCounter + 1)) //cpunter =16
      setCounter(prevCounter=>prevCounter + 1) //cpunter =17
      setCounter((prevCounter)=>(prevCounter + 1)) //cpunter =18
      setCounter((prevCounter)=>(prevCounter + 1)) //cpunter =19

      //prevCounter is just a variable name that asks counter its previous state to make sure it mananges the states 
      //IT IS JUST PROPOGATION
      //in sabh ka ek batch banega and kyuki in sabh ko as a counter 15 hi mil rha h toh koi bhi fark nhi padega it will result ot 16 
    
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


// console.log(setCounter)
// dispatchSetState(fiber, queue, action) {
//         var args = arguments;
//         "function" === typeof args[3] && console.error(
//           "State updates from the useState() and useReducer() Hooks don'…