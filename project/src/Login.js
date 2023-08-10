import React from 'react'
import './Form.css'
// import 'Quize.js'S
function Login(){
    const question =[
    { 
        id : 1,
        question : 'what is the capital of France?',
        options : ["Landon","Paris","Berlin","Rome"],
        correctAnswer:"Paris",
    },
    { 
    id : 2,
    question : 'which planet is known as the Red planet?',
    options : ["Mars","Venus","Jupiter","Saturn"],
    correctAnswer:"Mars",
    },
    
    { 
        id : 3,
        question : 'who painted the Mona Lisa?',
        options : ["Pablo Picasso","Vincent van Gogh","Leonardo da vinci","Michelangelo",],
        correctAnswer:"Leonardo da vinci",
    },
]

     const [Name,setName]=React.useState()
     const [Password,setPassword]=React.useState()
     const [page,setPage]=React.useState(1)
     const [Ans,setAns]=React.useState({})
     const handletextChange=(event)=>{
        // console.log(event.target.value)
        setName(event.target.value)
    }

    const handleClick=()=>{
        localStorage.setItem('usname',Name)
        localStorage.setItem("Password",Password)
        setPage(page+1)
    }
    const handleClick1=()=>{
       let name=localStorage.getItem('usname',Name)
        let Password1=localStorage.getItem("Password",Password)
        alert(name)
        alert(Password1)
        console.log(Name,Password1)
    }
    
    
    const handletextChange1=(event)=>{

        // console.log(event.target.value)
        setPassword(event.target.value)
    } 
    const handleonChange=(event)=>{
        // console.log(event.target.name,event.target.value)
        const{name,value}=event.target
            setAns(
                {...Ans,
                [name]:value}
            )

    }  
    let score=0;
    const calculetAnswer=()=>{   
    question.map((qui)=>{
        if(Ans[qui.id]==qui.correctAnswer){
                score++;
        }
    })
    return score

    }
 
    return(
    <diV> 
        {page ==1 &&(
        <div>
            <form>
            <label>Name<input onChange={(event)=>handletextChange(event)}/></label>
            <label>Password< input onChange={(event)=>handletextChange1(event)}/></label>
            <button onClick={()=>handleClick() }>Login</button>
            <button onClick={()=>handleClick1()}>get</button>
            </form> 
        </div>)}
        {page==2 &&(
            <div>
                <h2>
                            Quize App
                </h2>
                {question.map((qui)=>(
                    
                        
                    <>
                       
                        <h2>
                            {qui.id}
                        {qui.question}
                        </h2>
                        {qui.options.map((val)=>(
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name={qui.id} value={val}
                            onChange={(event)=>handleonChange(event)}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                              {val}
                            </label>
                          </div>
                            ))}
                      </>
                
                ))}
            <button onClick={()=>handleClick()}>submit</button>
            </div>
        )}
        {page==3 &&(
            <div>
                
                <p>Your score is : {calculetAnswer()}</p>
            </div>

        )}



    </diV>
        // <div>
        //     <form>
        //     <label>Name<input onChange={(event)=>handletextChange(event)}/></label>
        //     <label>Password< input onChange={(event)=>handletextChange1(event)}/></label>
        //     <button onClick={()=>handleClick() }>Login</button>
        //     <button onClick={()=>handleClick1()}>get</button>
        //     </form> 
        // </div>
    )
}
export default Login;