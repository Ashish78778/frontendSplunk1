import React from "react";
import "./Destination.css";
import parisPic1 from "../Assets/jaipur1.jpg";
import parisPic2 from "../Assets/jaipur3.jpg";
import italy1 from "../Assets/jaipur4.jpg";
import italy2 from "../Assets/jaipur5.jpg";
import maldivs1 from "../Assets/jaipur7.jpg";
import maldivs2 from "../Assets/jaipur6.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Popular Destination</h1>
        <p className="font-sofias tagline">
          Where adventure awaits at every turn!
        </p>
        <DestinationData
          heading="Jaipur: The City of Love!"
          text="Experience the timeless allure of Jaipur. Walk along the
            romantic Jalmahal Jheel, under the iconic aravali's shadow.
            Immerse yourself in world-renowned art at the Jaipur Museum and be
            captivated by the charm of Amer's winding streets. Indulge in
            exquisite cuisine at cozy bistros, savoring delicate Sangari and
            Churma. Discover the magic of the City
            of Love as you explore its cobblestone lanes, witness unforgettable
            sunsets over the cityscape, and create cherished memories that will
            linger forever."
          img1={parisPic1}
          img2={parisPic2}
          className="first-desc"
          button="Set Your Plan!"
        />
        <DestinationData
          heading="Jaipur: The Pink City!"
          text="Explore the enchanting wonders of Jaipur, known as The Pink City. Nestled amidst a network of picturesque forts, jaipur offers a unique and romantic escape. Glide along the iconic Hawamahal in a badi chopad, marvel at the intricate architecture of Hawamahal, and lose yourself in the narrow alleyways, discovering hidden gems at every turn. Savor delectable rajasthani cuisine in charming trattorias and sip on fresh lime juice along the historic City Palace. Jaipur, with its rich history, art, and culture, is a timeless destination that promises unforgettable experiences. Immerse yourself in this captivating city, where every corner unveils a piece of its magical story."
          img1={italy1}
          img2={italy2}
          className="first-desc-reverse"
          button="Set Your Plan!"
        />
        <DestinationData
          heading="Amer: The Sunny Side of Life!"
          text="Embark on a journey to the Amer, where nature's wonders and luxury seamlessly intertwine. Discover a world of unparalleled beauty and serenity as you immerse yourself in the turquoise embrace of the Indian Architecture at its peak. Whether you seek romantic seclusion, thrilling mountains, or simply to unwind on sun-kissed pictures, Amer offers it all. Picture yourself at the top of the world while being at nahargarh, where each moment is a dreamlike escape. The Amer, promising an unforgettable experience where your every desire is met in this heavenly paradise."
          img1={maldivs1}
          img2={maldivs2}
          className="first-desc"
          button="Set Your Plan!"
        />
      </div>
    </>
  );
};

export default Destination;
