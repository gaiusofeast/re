import React from 'react'
import W1 from './W2.jpg'
import W3 from './WW.jpg'
import './Test.css'
const Test = () => {
  return (
    <>
<div id="carouselExampleCaptions" class="carousel slide m-90">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active  one">
      <img src={W1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Happy Couple</h5>
        <p>"Our wedding was perfect! The venue, staff, and attention to detail made it an unforgettable day. Our guests loved it too!"
- Emily & John</p>
      </div>
    </div>
    <div class="carousel-item  one">
      <img src={W3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Happy Couple</h5>
        <p>"Our wedding was perfect! The venue, staff, and attention to detail made it an unforgettable day. Our guests loved it too!"
- Emily & John</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<section id="cta">

    <h3>Give yousrelf a wedding you deserve .</h3>
    <button class="qwer">Download(Window)</button>
    <button class="qwer">Download(Linux)</button>

  </section>
  </>
)
}

export default Test
