import React from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute  rounded-xl flex items-center h-full sm:h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 w-1/2 ps-12">
            <h2 className="text-6xl text-white">
              Find Our Best Online Courses & Become the Master
            </h2>
            <p className="text-white text-bold">
              Unlock Your True Potential with Expert Guidance: Our experienced
              coaches provide insightful guidance and support tailored to your
              unique needs, empowering you to unleash your full potential.
            </p>
            <div className="flex gap-2">
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Discover More
              </button>
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 w-1/2 ps-12">
            <h2 className="text-6xl text-white">
              Discover Our Premier Online Courses & Achieve Mastery
            </h2>
            <p className="text-white text-bold">
              Experience Unparalleled Growth with Our Exceptional Coaching
              Programs: Our coaching center offers transformative programs
              designed to help individuals achieve remarkable personal and
              professional growth.
            </p>
            <div className="flex gap-2">
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Discover More
              </button>
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 w-1/2 ps-12">
            <h2 className="text-6xl text-white">
              Accelerate Your Progress with Professional Coaching
            </h2>
            <p className="text-white text-bold">
              Empower Yourself with Confidence and Self-Assurance: Through our
              coaching programs, you&apos;ll gain the tools and strategies to
              boost your confidence, enhance your self-assurance, and overcome
              challenges with ease.
            </p>
            <div className="flex gap-2">
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Discover More
              </button>
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 w-1/2 ps-12">
            <h2 className="text-6xl text-white">
              Achieve Excellence with Specialized Coaching Programs
            </h2>
            <p className="text-white text-bold">
              Personalized Coaching for Lasting Results: Our coaches provide
              individualized attention, working closely with you to identify
              your goals and create a customized coaching plan that delivers
              long-lasting results.
            </p>
            <div className="flex gap-2">
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Discover More
              </button>
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner5} className="w-full" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-7 w-1/2 ps-12">
            <h2 className="text-6xl text-white">
              Ignite Your Growth with Top-notch Coaching Services
            </h2>
            <p className="text-white text-bold">
              Elevate Your Skills and Knowledge to New Heights: Our coaching
              center offers comprehensive training and skill-building programs
              that enable you to excel in your chosen field.
            </p>
            <div className="flex gap-2">
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Discover More
              </button>
              <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
