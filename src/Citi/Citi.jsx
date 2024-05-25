import React from 'react'
// import '../Navbar/Bootstrap.css'
import './Citi.css'
import { menu } from '../assets/assets'
// import '../Navbar/Bootstrap.js'


const Citi = ({category,setCategory}) => {
  return (
    <div className='container'>
 { menu.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="item1">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p><b>{item.menu_name}</b></p>
                </div>
                   )
  }) 

   

         }

</div>
      

  )
}

export default Citi



