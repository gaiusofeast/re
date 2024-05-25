import {React} from 'react'
import './Item.css';


const Item = ({id,name,description,price,image}) => {
     return (
     <div className='item'>
       <div className="item-img">
        <img src={image} alt="" className="food-item-image" />
        </div>
       <div className="item-info">
           <p>{name}</p> 
       </div>
       <p className="item-desc">{description}</p>
       <p className="item-price">${price}</p>
     </div>
    )
}

export default Item;
