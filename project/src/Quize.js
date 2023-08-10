import React from 'react'

function Quize(props){
    console.log(props)
    const[name,course]=props
    return(
        <div>hello {name}
        <br/> my course:{course}
        </div>
    )
}
export default Quize;