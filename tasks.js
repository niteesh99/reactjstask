import React from 'react'
import Dis, { CountApp } from './stexample'
 let arr=[
   {
      id:1,
      name1:'niteesh',
      sec:'a',  
   } ,
   {
    id:2,
    name1:'sam',
    sec:'a',  
 } 
]
const col={
    color:'red',backgroundColor:'blue'
}
 const Tasks = () => {
    return (
        <div>
             {  
              arr.map((t)=>(<h3 style={col}>{t.name1}</h3>))
             }
             <Dis/>
             <CountApp/>
        </div>
    )
}
export default Tasks
