import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


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






function App() {
  return (
    <div>
      <Header/>
      <div>
        <p>SMIT</p>
      </div>
      <Footer/>
    </div>
  )
}


export default App