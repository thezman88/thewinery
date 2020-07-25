import React from 'react';

const Footer = ()=>{
    return(
        <div id="footer" class="container-fluid tex-center">
                <div class="row text-center">
                    <div class="col-12">
                        <p class="footName text-white small">© 2020 St.George Winery</p>
                    </div>
                    <div className='col-12 text-center'>
                    <nav class="navbar navbar-expand-lg navbar-dark">
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div class=" navbar-collapse justify-content-md-center text-center" id="navbarsExample08">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="foot nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="foot nav-link" href="#">Menu </a>
      </li>
      <li class="nav-item">
        <a class="foot nav-link" href="#">Events </a>
      </li>
      <li class="nav-item">
        <a class="foot nav-link" href="#">Gallery </a>
      </li>
      <li class="nav-item">
        <a class="foot nav-link" href="#">Reservations</a>
      </li>
  
     
    </ul>
  </div>
</nav>
                    </div>

                </div>

            </div>
    )
}

export default Footer;