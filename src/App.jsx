import logo from './logo.svg';
import './App.css';
import img from './assets/images/image.jpeg'

let obj = {
  name:"Ahmed",
  emial:"Ahmed@gmail.com"
}


function App() {
  let name = "Muhammad Ahmed";
  const foo = (a)=>{
    console.log("running..",a)
  }
  return (
    <div>
      <h1 style={{backgroundColor:"grey",border:"2px solid #000"}} >{name}</h1>
      <h2>{obj.name}</h2>
      <button onClick={()=>foo("Hello")}>Click Me</button>
      <br />
      <img src={img} alt="" />
    </div>
  );
}

export default App;
