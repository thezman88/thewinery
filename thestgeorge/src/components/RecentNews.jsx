import React from "react";

const RecentNews = () => {
  return (
    <div className="recentNews container-fluid text-center">
      <h2 className="mt-5">Recent News</h2>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <div class="card mb-4 shadow-sm text-left">
                <img className='eventImg' src='https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          
            <div class="eventCard card-body">
              <h4 class="event-card-title pricing-card-title">
                Taste the St. George Winery Sauvignon Blanc
              </h4>
           <p className='eventText'>
               save 20% on our Reserve Wines, Discover why St.George has been awarded with...
           </p>
           <div className='row'>
               <div className='col-6 text-left'>
               <p className='date small mt-2'>July 23, 2020</p>
               </div>
               <div className='col-6 text-right'>
           <a href="#" class="menu btn border">
                 View
                </a>
           </div>
           </div>
             
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <div class="card mb-4 shadow-sm text-left">
                <img className='eventImg' src='https://images.pexels.com/photos/628777/pexels-photo-628777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          
            <div class="eventCard card-body">
              <h4 class="event-card-title pricing-card-title">
               Red Cabbage with White Sauce and Honey
              </h4>
           <p className='eventText'>
           Heat the croquettes, and turning it into thin you have it, so must add to cover it from whites. Put the toast. A puree to each side. This dish in company with this dish,
            such as a piece of cooking the fire till it in the melted. …
           </p>
           <div className='row'>
               <div className='col-6 text-left'>
               <p className='date small mt-2'>July 1, 2020</p>
               </div>
               <div className='col-6 text-right'>
           <a href="#" class="menu btn border">
                 View
                </a>
           </div>
           </div>
             
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <div class="card mb-4 shadow-sm text-left">
                <img className='eventImg' src='https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          
            <div class="eventCard card-body">
              <h4 class="event-card-title pricing-card-title">
              Pan-Seared Scottish Salmon
              </h4>
           <p className='eventText'>
           mirin glaze, edamame and green onion jasmine rice
           </p>
           <div className='row'>
               <div className='col-6 text-left'>
               <p className='date small mt-2'>June 25, 2020</p>
               </div>
               <div className='col-6 text-right'>
           <a href="#" class="menu btn border">
                 View
                </a>
           </div>
           </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;

