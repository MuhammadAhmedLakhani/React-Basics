import logo from './logo.svg';
import './App.css';
import img from './assets/images/image.jpeg'

function App() {
  return (
    <div>
      <h1 style={{backgroundColor:"grey",border:"2px solid #000"}} >Hello </h1>
      <img src={img} alt="" />
    </div>
  );
}

export default App;
