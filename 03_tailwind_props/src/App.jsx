import "./App.css";
import Card from "./components/Card";

function App() {
  let myArr = [1,2,3,4,5]
  let myObj = {
    name : "Dhruv",
    lang : "JS"
  }


  return (
    <>
      <h1 className="text-3xl font-bold bg-green-400 text-black rounded-2xl p-2">
        Hello world!
      </h1>
      {/* <Card channel="dhruvWadh" myArr=[1,2,3,4] /> */}
      {/* <Card channel="dhruvWadh" myArr={"first":"Dhruv"} /> */}
      {/* <Card channel="hello" myArr/> */}
      <div className="flex m-30 gap-30">
      <Card channel="dhruv" someArr={myArr} someObj={myObj} srcNo={480} />
      <Card username="dhruv Wadhwani" btnText="click to visit me"srcNo={310}/>
      <Card username="Vedant Raval" srcNo="302"/>
      <Card username="Chinmay" />
      </div>
      
    </>
  );
}

export default App;
