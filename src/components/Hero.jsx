import React, { useState } from "react";
import bannerImg from "../assets/banner-img-1.png";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
        Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className=" text-gray-500 text-xs">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br/>
         routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>

        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            // set
            setSearchText("");
          }}
          className="flex flex-col justify-center items-center w-full mb-4 md:flex-row md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search any doctor"
            type="text"
            className="w-2/3 h-12 px-4 mb-3  bg-white border border-gray-300 rounded-lg shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
          />
          <a className="btn btn-primary rounded-lg">Search Now</a>
        </form>
      </div>

      <div className="flex w-6/12 gap-3 px-10">
        <img
          src={bannerImg}
          className="w-full"
        ></img>

        <img
          src={bannerImg}
          className="w-full"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
