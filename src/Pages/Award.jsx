import React from "react";
import { FaAward, FaBookReader, FaUserGraduate } from "react-icons/fa";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const Award = () => {

    const [ref ,inView]=useInView({
        threshold:0.5,
    })

  return (
    <div className="p-24" ref={ref}>
      <div className="flex justify-around flex-col md:flex-row gap-4">
        <div className="flex items-center gap-3">
          <FaAward className="h-16 w-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-100 p-2"></FaAward>
          <div>
            {/* <h2 className="text-4xl font-bold text-black">20,000+</h2> */}
            <p className="text-4xl font-bold text-black">
                {inView ? <CountUp start={0} end={20000} duration={3}/>:null}
                +
                </p>
            <h2 className="text-2xl font-bold text-gray-500">Special Courses</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaUserGraduate className="h-16 w-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-100 p-2"></FaUserGraduate>
          <div>
            <p className="text-4xl font-bold text-black">
                {inView?<CountUp start={0} end={480000} duration={3}/>:null}
                +
            </p>
            <h2 className="text-2xl font-bold text-gray-500">Enrolled Student</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaBookReader className="h-16 w-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-100 p-2"></FaBookReader>
          <div>
            <p className="text-4xl font-bold text-black">
                {inView?<CountUp start={0} end={4000} duration={3}/>:null}
                +
                </p>
            <h2 className="text-2xl font-bold text-gray-500">Expert Instructor</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
