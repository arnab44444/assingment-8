import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import StatsSection from "./StatsSection";

const DoctorContainer = ({ data }) => {
  console.log(data);

  const [displayDoctor, setDisplayDoctor] = useState([]);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayDoctor(data);
    } 
    else {
      setDisplayDoctor(data?.slice(0, 6));
    }
  }, [data, showAll]);


  
  return (
    <div className="py-12  bg-gray-200">
      <h1 className="text-3xl font-bold text-center">Our Best Doctors</h1>

      <p className="font-light  text-center my-3">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />{" "}
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-2 p-10">
        {displayDoctor?.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="btn bg-blue-400 hover:bg-blue-600 flex items-center"
          onClick={() => {
            setShowAll((prv) => !prv);
            if (showAll) window.scrollTo(0, 0); // when switching to "Show Less"
          }}
        >
          {showAll ? "Show Less Doctors" : "View All Doctors"}
        </button>
      </div>



      <h1 className="text-3xl font-bold text-center mt-10">We Provide Best Medical Services</h1>
      <p className="text-xs text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

      <StatsSection></StatsSection>
    </div>
  );
};

export default DoctorContainer;
