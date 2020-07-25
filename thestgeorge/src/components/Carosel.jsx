import React from 'react';

const Carosel = ()=>{
    return(
        
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class=""></li>
      <li data-target="#myCarousel" data-slide-to="1" class=""></li>
      <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item">
          <img className='img1' src='https://images.pexels.com/photos/39511/purple-grapes-vineyard-napa-valley-napa-vineyard-39511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />

   <div class="container">
          <div class="carousel-caption text-center">
              <h4 className='photoText'>Attributive Wines from our vineyards</h4>
              <p>Our wine has won international awards.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item active carousel-item-left">
          <img className='img1' src='https://images.pexels.com/photos/1267359/pexels-photo-1267359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        <div class="container">
          <div class="carousel-caption">
              
          <h4 className='photoText'>We take care with love</h4>
              <p>We are passionate about producing original, above all tasty wine, we make our wines simply full of the finest tastes.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-item-next carousel-item-left">
          <img className='img1' src='https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        <div class="container">
          <div class="carousel-caption">
          <h4 className='photoText'>Ingredients Grown on Our Fields</h4>
              <p>Our wine has won international awards.</p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    )
}

export default Carosel;