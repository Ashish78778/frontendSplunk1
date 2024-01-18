import React from "react";
import "./TourStyles.css";
import TourData from "./TourData";
import Tour1 from "../Assets/jaipur12.jpg";
import Tour2 from "../Assets/jaipur8.jpg";
import Tour3 from "../Assets/jaipur10.jpg";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Recent Tours</h1>
        <p className="font-sofias tagline">
          Unveiling Our World, One Journey at a Time!
        </p>
        <div className="tourCard">
          <TourData
            image={Tour1}
            heading="Hawamahal"
            text="Explore jaipur's iconic landmark, stunning building, and vibrant culture on our unforgettable guided tour."
            button="Book Now"
          />
          <TourData
            image={Tour2}
            heading="Amer Fort"
            text="Discover ancient wonders, Renaissance art, and vibrant culture with us in our unforgettable Amer tour."
            button="Book Now"
          />
          <TourData
            image={Tour3}
            heading="Jantar Mantar"
            text="Experience the irresistible allure of Jaipur's Jantar Mantar: a blend of opulence, culture, and scientific mystique in one unforgettable tour."
            button="Book Now"
          />
        </div>
      </div>
    </>
  );
};

export default Tour;
