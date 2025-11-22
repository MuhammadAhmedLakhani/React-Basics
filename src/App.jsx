import logo from './logo.svg';
import './App.css';
import {Header , Footer} from './components/component'
import Card from './components/Card.jsx';

import Input from './components/Input.jsx'

// function App() {
//   let name = "Muhammad Ahmed";
//   const foo = (a)=>{
//     console.log("running..",a)
//   }
//   return (
//     <div>
//       <h1 style={{backgroundColor:"grey",border:"2px solid #000"}} >{name}</h1>
//       <ul>
//       {
//        students.map((elem , i)=> <li>{elem.name}</li>)
//        }

//       </ul>
//     </div>
//   );
// }

// export default App;

              //prop is like parameter to recieve the argument but accepts object


function App() {
    // const arr = ["one","two","three"]
    // const getData1 = (a)=> {
    //   console.log("----parent",a)
    // }

  return (
    <div>

        {

          <Input  chnageFunction = {(e)=>console.log(e.target.value)}  />

          // arr.map((v,i)=>

          //     // passing value to component like argument to function

          //     <Card key={i}  value={v}  getdata={getData1} />
          //   )
          


        }


    </div>
  )
}


export default App