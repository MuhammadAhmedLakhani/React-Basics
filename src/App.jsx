import logo from './logo.svg';
import './App.css';
import img from './assets/images/image.jpeg'

let students = [ {
  name:"Ahmed",
  email:"Ahmed@gmail.com"
},{
  name:"Ghous",
  email:"Ghous@gmail.com"
}]


function App() {
  let name = "Muhammad Ahmed";
  const foo = (a)=>{
    console.log("running..",a)
  }
  return (
    <div>
      <h1 style={{backgroundColor:"grey",border:"2px solid #000"}} >{name}</h1>
      <ul>
      {
       students.map((elem , i)=> <li>{elem.name}</li>)
       }

      </ul>
    </div>
  );
}

export default App;
