import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { addApointment } from "../utils";
// import { useNavigate } from "react-router-dom"; // ✅ useNavigate, not Navigate


const DoctorDetails = () => {
  const data = useLoaderData();

  console.log(data);
  const { id } = useParams();

  console.log(id);

  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));
  console.log(singleDoctor);

  const { image, name, speciality, education, registrationNumber, fee } =
    singleDoctor;

  // const bookAppointment = () => {
  //   const storedAppointments =
  //     JSON.parse(localStorage.getItem("appointments")) || [];
  //   const isAlreadyBooked = storedAppointments.some(
  //     (appointment) => appointment.name === singleDoctor.name
  //   );

  //   if (isAlreadyBooked) {
  //     toast.error("Appointment already booked!");
  //     return;
  //   }
  //   toast.success("Booking successful!");
  //   // setTimeout(() => {
  //   //     navigate('/bookings', { state: { doctor } });
  //   // }, 1000);

  //   setTimeout(() => {
  //       Navigate('/bookings');
  //   }, 1000);
  // };

  // const bookApointment = () =>{
  //   addApointment(singleDoctor)
  //   toast.success("Booking successful!");
  // }

  const navigate = useNavigate();


  const bookApointment = () => {
    const success = addApointment(singleDoctor);
  
    if (success) {
      toast.error("Appointment already booked!");
       return;
    } else {
      toast.success("Booking successful!");
  
      setTimeout(() => {
        navigate('/bookings'); 
      }, 1000); // optional delay to let toast show
    }
  };
  

  return (
    <>
      <ToastContainer />

      <div className=" bg-white shadow-xl flex  mx-auto">
        <figure className="px-10 ">
          <img
            src={image}
            alt="Dr. Cameron Williamson"
            className="rounded-xl mt-10 w-[300px]"
          />
        </figure>

        <div className="card-body items-start mt-5 text-left">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-700">{education}</p>
          <p className="text-sm text-gray-700">{speciality}</p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Working at:</strong>
            <br />
            TMSS Medical College & Rafatullah Community Hospital, Bogura
          </p>

          <p className="text-sm text-gray-700 border-t border-b border-dotted border-gray-400 w-full py-2">
            Reg No: {registrationNumber}
          </p>

          {/* <p className="text-sm text-gray-700">
          <strong>Availability:</strong> Sunday, Monday, Thursday
        </p> */}

          <div className="text-sm text-gray-700 flex flex-wrap justify-center md:justify-start gap-2">
            {singleDoctor.availability.map((day, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
              >
                {day}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-700">
            <strong>Consultation Fee:</strong>{" "}
            <span className="text-blue-600">Taka {fee}</span> (incl VAT)
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-20">
        <div className="bg-white border-t pt-4 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h4 className="text-xl md:text-2xl font-semibold text-black text-center md:text-left">
              Book an Appointment
            </h4>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Doctor Available Today{" "}
            </span>
          </div>
          <div className="text-black text-lg font-semibold text-center md:text-left">
            Availability
          </div>
          <div className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded text-sm border border-yellow-300 text-center md:text-left">
            ⚠️ Due to high demand, appointments are currently available for
            today only.
          </div>

          {/* <Link to={`/doctor-details/${id}`} className="card-actions justify-center mt-4">
                      <button className="btn btn-outline btn-primary">View Details</button>
                    </Link> */}

          {/* <Link to='/bookings'> */}
          
          <button
            onClick={bookApointment}
            className="w-full bg-blue-400 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
          >
            Book Appointment Now
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
