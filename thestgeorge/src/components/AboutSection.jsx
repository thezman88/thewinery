import React from "react";

const AboutSection = () => {
  return (
    <div className="aboutSection container-fluid text-center ">
      <div className="row m-3">
        <div className="bgimg col-sm-12 col-md-12 col-lg-4 mt-2 mb-2">
          <h5 className="text-white mt-5">Book a table</h5>
          <hr></hr>
          <p className="text-white">
            Use our online reservation form to book your table in a restaurant,
            bar or loft.
          </p>
          <a href="#" class="menu btn border">
            Book a Table
          </a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-2 mb-2 text-center text-white">
          <h5 className="text-white mt-5">Opening Hours</h5>
          <hr></hr>
          <li>Monday.........CLOSED</li>
          <li>Tuesday..............5PM - 11PM</li>
          <li>Wednesday..........5PM - 11PM</li>
          <li>Thursday.............5PM - 11PM</li>
          <li>Friday.................5PM - 11PM</li>
          <li>Saturday.............5PM - 11PM</li>
          <li>Sunday.............CLOSED</li>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-2 mb-2 text-center text-white">
          <h5 className="text-whtie mt-5">About us</h5>
          <hr></hr>
          <p>
            The Winery is housed in a 110 year-old stone church that has been
            transformed into one of the most sought-after, unique venues in the
            Tri-State Area.<br></br> We provide you and your guests with a
            combination of our Domestic and International Wine Bar and Catering
            Services in our exquisite setting with traditional tables, love
            seats and lounges.
          </p>
          <a href="#" class="menu btn border">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
