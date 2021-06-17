import React from 'react'


const Nav=({userIDs})=>{
return(
    <nav>
        <ul>
        {userIDs.map(user=>(
         <li>
             <button>{user}</button>
         </li>
     ))}
        </ul>
    
    </nav>
)
}

export default Nav