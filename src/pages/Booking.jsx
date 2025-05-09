import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { getApointment, removeApointment } from '../utils';
import EmptyState from '../components/shared/EmptyState';
import { toast } from 'react-toastify';

const Booking = () => {

      const [displayDoctor, setDisplayDoctor] = useState([]);

      useEffect(() =>{
            const savedDoctors = getApointment;

            setDisplayDoctor(savedDoctors)
      },[])
    

      const handleDelet = id =>{
        removeApointment(id)
        setDisplayDoctor(getApointment)
        toast("Apointment sucessfully cancel");

      }

      if(displayDoctor.length < 1)
        return <EmptyState></EmptyState>

    return (
        <div className="py-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-5">
        {displayDoctor?.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} toast={toast} deletable={true} handleDelet={handleDelet}></DoctorCard>
        ))}
      </div>

    </div>
    );
};

export default Booking;