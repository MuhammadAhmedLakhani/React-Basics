
//instead of using prop.value again and again we destructure the prop object

function Card({value ,getdata}){
    return (

      <div>
          <h1>{value}</h1>
          <button onClick={()=>getdata("M ")}>Click me</button>
      </div>

    )

}

export default Card