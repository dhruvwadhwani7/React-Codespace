
import './App.css'

function App() {

  let counter = 5

  const addValue=()=>{
    console.log('clicked for increase',counter)
    counter ++  
  }
  
  return (
    <>
      <h1>Dhruv Wadhwani</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button>Remove Value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App

// <button onClick={addValue()}>Add Value</button>
// you dont call you just pass the refrence addvalue only 
