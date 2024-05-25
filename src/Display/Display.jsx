import React from 'react'
import './Display.css'
import Item from '../Item/Item'
import { acc } from '../assets/assets'
const Display = ({category}) => {
   
    return (
  
       <div className="display" id='display'>
    
        <div className="display-list">
         
         {acc.map((item,index)=>{
            if(category==="All"||category===item.category)
            {
               return(
                  <Item key={index} id ={item._id} name ={item.name} description={item.description} price={item.price} image={item.image}/>
               )
            }
            
       
          })}
           
               
         
        </div>
       </div>
    
  )
}

export default Display;
