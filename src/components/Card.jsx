
//instead of using prop.value again and again we destructure the prop object

function Card({value , i}){
    return (

      <div>
          <h1>{value}</h1>
          <h1>{i}</h1>
      </div>

    )

}

export default Card