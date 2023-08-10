import react, { useState } from 'react'

function Cnt(){
    const [Count,setCount]=useState(0)
    function handIncClick(){
            setCount(Count+1)
          
    }
    function handDecClick(){
            setCount(Count-1)
          
    }

    return(
        <>
        <button onClick={()=>{handIncClick('Inc')}}>
            Increment
        </button>
        {Count}
        
        <button onClick={()=>{handDecClick('Dec')}}>
            Decrement
        </button>
        </>
    )
}

export default Cnt