import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpg";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel>
        <div style={{height:"90vh"}}>
          <img style={{height:"100%"}} src={banner1} />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{height:"90vh"}}>
          <img style={{height:"100%"}} src={banner2} />
          <p className="legend">Legend 2</p>
        </div>
        <div style={{height:"90vh"}}>
          <img style={{height:"100%"}} src={banner3} />
          <p className="legend">Legend 3</p>
        </div>
        <div style={{height:"90vh"}}>
          <img style={{height:"100%"}} src={banner4} />
          <p className="legend">Legend 3</p>
        </div>
        <div style={{height:"90vh"}}>
          <img style={{height:"100%"}} src={banner5} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
