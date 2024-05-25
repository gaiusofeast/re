import React from 'react'
import './Why.css'
import './fonts.css'
import hv from './home_visits.png'
import hov from './home_vendor.avif'
import hd from './home_discover.png'

const Why = () => {
  return (
<>
      
      <div className="big">
        <div className="big2">
            <img src={hv} alt="" />
    
        <div className="big3">
           <h2><b>Visits</b></h2>
        </div>
        <div className="big4">
           <p>Visit venues on your own or with our venue expert.</p>
        </div>
        </div>

        <div className="big2">
            <img src={hov} alt="" />
    
        <div className="big3">
           <h2><b>Venues</b></h2>
        </div>
        <div className="big4">
           <p>Input your requirements & see our recommendations & prices.</p>
        </div>
        </div>

        <div className="big2">
            <img src={hd} alt="" />
    
        <div className="big3">
           <h2><b>Vendors</b></h2>
        </div>
        <div className="big4">
           <p>Meet our trusted vendors and book them at your ease.</p>
        </div>
        </div>
      </div>
  </>
  )
}

export default Why
