import React,{ useEffect, useState } from "react";
import {NavLink, useHistory,Link } from "react-router-dom";
import { Navbar,Offcanvas,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import './login.css';
import './home.css';


class HomeDesign extends React.Component{
    render()
    {
        return(
          <>
      <main>
  <section class="cta-img" id="cta-img">
    <div class="cta-banner">
    <h1>Let's Make this Ride less Expensive than Ever </h1>
      <div class="cta-wrapper">
        <div className="button">
    <Link to ='/adsLogin'><button type="button" className="btn btn-dark"><SearchIcon/>Search For Ride</button></Link>
    </div>
      </div>  
       </div>
  </section>
  
  <section class="products" id="products">
    <div class="products-wrap">   
      <div class="product-item">
        <img class="beam-img" src="https://ucsustainability.files.wordpress.com/2018/05/cropped-carpool-sd.png"  height="100" alt="Beams" title="Beams"/>
        <div class="product-description">
          <p class="product-label"><b>Scroll, click, tap and go!</b></p>
          <hr class="hr-line"/>
          <ul class="item-type">
            <li>Booking a ride has never been easier!<br/>Thanks to our simple app powered<br/> by great technology<br/> you can book a ride close to you in just minutes.</li>
          </ul>
        </div>
      </div>
      <div class="product-item">
        <img class="bolt-img" src="https://w7.pngwing.com/pngs/991/657/png-transparent-money-animation-cartoon-mad-money-s-hand-human-cartoon.png" width="80" height={"100"} alt="Bolts" title="Bolts"/>
        <div class="product-description">
          <p class="product-label"><b>Money</b></p>
          <hr class="hr-line"/>
          <ul class="item-type">
            <li>They say money can't
                <br/>buy you happiness,
                but we'd prefer
                <br/>to cry on a beach
                vacation.</li>
                
          </ul>
        </div>
      </div>
      <div class="product-item">
        <img class="bar-img" src="https://static9.depositphotos.com/1497380/1190/v/600/depositphotos_11908203-stock-illustration-car-cartoon-character-with-thumb.jpg" width="80" alt="Bars" title="Bars"/>
        <div class="product-description">
          <p class="product-label"><b>Your pick of rides at low prices</b></p>
          <hr class="hr-line"/>
          <ul class="item-type">
            <li>No matter where you’re going,<br/> by bus or carpool, find the perfect ride<br/> from our wide range of destinations<br/> and routes at low prices.</li>
           
          </ul>
        </div>
      </div>
      
    </div>
  </section>
  <section class="cta-img" id="cta-img">
    <div class="cta-banner">
      <div class="cta-wrapper">
      </div>  
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-b7b31315-eba3-41d5-844a-a095f97da316"></div>
       </div>
  </section>
  

    
  
</main>

<footer>
  <div id="footer">Created by Sharon N for FreeCodeCamp || Product Landing Page Project</div>
</footer>
 
  </>
        );
    } 
}  

export default HomeDesign;