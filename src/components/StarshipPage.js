import React from 'react';


export default function StarshipPage({info}){

console.log("instead of using props", info);

const display = info.map(item => {
    return(
        <li>
           <h3> {item.name}</h3> 
           <h3> {item.model}</h3> 
            
               

        </li>
    )
})

    return(
        <>{display} </>
    )
    
}

 