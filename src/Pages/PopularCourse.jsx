import React from "react";
import theme1 from "../assets/banner/banner1.jpg";
import theme2 from "../assets/banner/banner2.jpg";
import theme3 from "../assets/banner/banner3.jpg";
import theme4 from "../assets/banner/banner4.jpg";
import theme5 from "../assets/banner/banner5.jpg";

const PopularCourse = () => {
  return (
    <div className="md:p-10">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold text-black">Our Popular Courses</h1>
        <button className="btn rounded-full btn-outline ml-5 text-green-400 font-bold">
          All Courses
        </button>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
          <div className="bg-green-400 rounded-full p-2 absolute bottom-44 text-2xl right-5">$20</div>
            <img src={theme1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Application Development
            </h2>
            <p></p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
          <div className="bg-green-400 rounded-full p-2 absolute bottom-44 text-2xl right-5">$20</div>
            <img src={theme2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Language Learning
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
          <div className="bg-green-400 rounded-full p-2 absolute bottom-44 text-2xl right-5">$20</div>
            <img src={theme3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Science
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
          <div className="bg-green-400 rounded-full p-2 absolute bottom-44 text-2xl right-5">$2220</div>
            <img src={theme4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              History
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <div className="bg-green-400 rounded-full p-2 absolute bottom-44 text-2xl right-5">$20</div>
            <img src={theme5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arts & Design
              <div className="badge badge-secondary">New</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
