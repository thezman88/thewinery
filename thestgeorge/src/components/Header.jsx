import React from 'react';

const Header = ()=>{
    return (
        <div className='header container-fluid'>
            <div className='row pt-4'>
                <div className='col-sm-12 col-md-12 col-lg-4 text-center'>
                <p className='address'>1715 E. Main Street, Mohegan Lake, NY 10547<br/>
                +914 455 4272 , wine@stgeorge.com</p>
                </div>
                <div className='col-sm-12 col-lg-4 text-center'>
                    <img className='logoImg mb-1 'src='http://www.thewineryatstgeorge.com/images/home/StGeorgeTestaurant@2x.png' />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4 text-center'>
                <i class="brandImg fab fa-twitter mr-1 "></i>
                <i class="brandImg fab fa-instagram mr-1"></i>
                <i class="brandImg fab fa-facebook-f mr-1"></i>
                <i class="brandImg fab fa-tripadvisor mr-1"></i>
                <i class="brandImg fab fa-yelp"></i>
                </div>
            </div>
        </div>
      
    )
}

export default Header;