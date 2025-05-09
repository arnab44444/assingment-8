import { toast } from "react-toastify"

export const getApointment = () =>{

    const apointment = localStorage.getItem('apointment')

    if(apointment) 
        return JSON.parse(apointment)

    return []
}


export const addApointment = doctor => {

    const apointment = getApointment()

    const isExist = apointment.find(p => p.id === doctor.id)

    if(isExist) {
        return false
        //console.log('phone already added');
       // toast.error("Appointment already booked!");
    }
    apointment.push(doctor)

    // console.log(doctor)

    //console.log(apointment)

    localStorage.setItem('apointment',JSON.stringify(apointment))

}

export const removeApointment = id => {
    const apointment = getApointment()
    
    const remainingApointment = apointment.filter(doctor => doctor.id != id)
    localStorage.setItem('apointment',JSON.stringify(remainingApointment))

   // toast.success("Apointment sucessfully cancel");
}