import logo from './logo.svg';
import './App.css';
import img from './assets/images/image.jpeg'


function App() {
  let name = "Muhammad Ahmed";
  const foo = (a)=>{
    console.log("running..",a)
  }
  return (
    <div>
      <h1 style={{backgroundColor:"grey",border:"2px solid #000"}} >{name}</h1>
      <button onClick={()=>foo("Hello")}>Click Me</button>
      <br />
      <img src={img} alt="" />
    </div>
  );
}

export default App;
