import React from 'react'
import { useState} from 'react'
const Dis= ()=> {
  const[arr]=useState(
      [
    {
       id:1,
       name1:'ahazmax',
       sec:'a',  
    } ,
    {
     id:2,
     name1:'santu',
     sec:'a',  
  } 
 ]
  ) 
     return (
         <div>
              {  
               arr.map((t)=>(<h3>{t.name1}</h3>))
              }
         </div>
     )
} 
export function CountApp() {  
    const [count, setCount] = useState(0);  
    
    return (  
      <div>  
        <p>You clicked {count} times</p>  
        <button onClick={() => setCount(count + 1)}>  
          Click me  
        </button>  
      </div>  
    );  
  }  
export default Dis;