import React from "react";
import { Link } from "react-router";
// import { removeApointment } from '../utils';

const DoctorCard = ({ doctor, deletable, handleDelet }) => {
  const { id, image, name, experience, education, registrationNumber } = doctor;

  return (
    //<ToastContainer></ToastContainer>

    <div className="card  bg-white shadow-xl mx-10 p-5">
      <figure className="bg-blue-100">
        <img
          src={image}
          alt="Dr. Cameron Williamson"
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body text-center">
        <div className="flex justify-center gap-2 mb-2">
          <div className="badge badge-success">Available</div>
          <div className="badge badge-info">{experience} Experience</div>
        </div>
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-sm text-gray-500">{education}</p>
        <p className="text-sm text-gray-700 border-t  border-dotted border-gray-400 w-full py-2">
          Reg No: {registrationNumber}
        </p>
        <Link
          to={`/doctor-details/${id}`}
          className="card-actions justify-center mt-4"
        >
          <button className="btn btn-outline w-full rounded-lg btn-primary">
            View Details
          </button>
        </Link>
      </div>

      {deletable && (
        <button
          onClick={() => handleDelet(id)}
          className="btn bg-red-300 text-red-500 hover:bg-red-600 hover:text-white"
        >
          Cancel Appointment
        </button>
      )}
    </div>
  );
};

export default DoctorCard;
