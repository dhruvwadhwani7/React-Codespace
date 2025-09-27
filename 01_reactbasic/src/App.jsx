import Dhruv from "./Dhruv.jsx";
function App() {
  const username = "Josh"
  return (
    <>
      <Dhruv />
      <h1>Hello World, how are you {username}</h1>
      <p>test para</p>
    </>
  );
}

export default App;

//you cannot wirte the evaluation expression inside the {}
// like you cannot write {if(true) username}
//you have to write the evaluated expression only there 
//because all htis things are etting converted to the objects and objects cannot take those if else staements as jsut their keys 
//there is defined syntax how react convert jsx into objects 
