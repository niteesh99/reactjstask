import React from 'react'
function Header(props) {
    return (
        <div>
            <h1 style={col}>niteesh</h1>
            <h1 style={col}>{props.title}</h1>
            <button style={col} onClick={add}>ADD</button>
        </div>
    )
}
Header.defaultProps={
    title:'task',
}
const col={
    color:'red',backgroundColor:'blue'
}
 const add=()=>
{
    alert("hi");
}
export default Header
  
