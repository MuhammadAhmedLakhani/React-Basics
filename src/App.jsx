import logo from './logo.svg';
import './App.css';
import img from './assets/images/image.jpeg'

let name = "Muhammad Ahmed";

function App() {
  return (
    <div>
      <h1 style={{backgroundColor:"grey",border:"2px solid #000"}} >{name}</h1>
      <img src={img} alt="" />
    </div>
  );
}

export default App;
