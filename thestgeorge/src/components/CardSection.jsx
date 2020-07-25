import React from "react";

const CardSection = () => {
  return (
    <div className="cardSection container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div class="card mt-3">
            <h5 class="top card-title mt-2 text-center">
              Healthy Homemade Cuisine
            </h5>

            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/47306/pasta-spaghetti-noodle-pasta-nests-47306.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <div class="card-body">
              <p class="card-p text-center">
                Our chefs headed by CHEFS NAME cook with the freshest and
                highest quality ingredients.<br />
                
                Come and taste our fantastic cuisine!
              </p>
              <div className="text-center">
                {" "}
                <a href="#" class="menu btn border">
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div class="card mt-3">
            <h5 class="top card-title mt-2 text-center">
              Napa Valley Wines
            </h5>

            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/45209/purple-grapes-vineyard-napa-valley-napa-vineyard-45209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <div class="card-body">
              <p class="card-p text-center">
               Famous worldwide for its wine, Napa Valley is a favorite global destination for winery tours and tastings.
                Here are the very best, including local favorites.<br/>
                <br />
                Come and enjoy our delicious Wines!

              </p>
              <div className="text-center">
                {" "}
                <a href="#" class="menu btn border">
                  View Wines
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div class="card mt-3">
            <h5 class="top card-title mt-2 text-center">
              Book a Table Online
            </h5>

            <img
              className="card-img-top"
              src="https://images.pexels.com/photos/6458/city-restaurant-lunch-outside.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <div class="card-body">
              <p class="card-p text-center">
               If you want to pre book your table, you can use our online booking form,
                and we will prepare you table for your visit.
                <br />
               We look forward to seeing you!
              </p>
              <div className="text-center">
                {" "}
                <a href="#" class="menu btn border">
                 Book a table
                </a>
              </div>
            </div>
          </div>
        </div>
        ///////////////////
        
      </div>
    </div>
  );
};

export default CardSection;
