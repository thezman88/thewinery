import React from 'react';

const Events = () =>{
    return (
        <div class="container-fluid">
        <h2 className='eventsTitle text-center'>Events</h2>
        <div class="horizCard card mt-4">
            <div class="row ">
                <div class="col-sm-12 col-md-4 col-lg-4 text-center">
                    <img class="evtImg card-img" src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=200" alt="Suresh Dasari Card"/>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8">
                    <div class="">
                        <h4 class="evtTitle card-title text-white mt-2">Taste the Old and New Napa Valley</h4>
                        <p className='dateText'>06/08/2020 — 08/08/2020</p>
                        <p class="evtText">If the fruit in a pan, adding chopped shallot, a little soda to sweeten it the carrots, and then chopping fine,
                         and the size of recipes for at my best; and well cooked, taking on the …</p>
                         <p className='text-white'>Napa Valley</p>
                         <div className='text-right'>
                         <a href="#" class="menu btn border">
                 View
                </a>
                         </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 mt-5">
                    <div class="">
                        <h4 class="evtTitle card-title text-white">Weekend Lunch Healthy & Excellent</h4>
                        <p className='dateText'>06/08/2020 — 08/08/2020</p>
                        <p class="evtText">If the fruit in a pan, adding chopped shallot, a little soda to sweeten it the carrots, and then chopping fine,
                         and the size of recipes for at my best; and well cooked, taking on the …</p>
                         <p className='text-white'>Napa Valley</p>
                         <div className='text-right'>
                         <a href="#" class="menu btn border">
                 View
                </a>
                         </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 text-center mt-5">
                    <img class="evtImg card-img" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Suresh Dasari Card"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Events;