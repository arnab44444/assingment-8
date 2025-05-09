//routes er por main.jsx then mainlayout(mbl) -> Navbar 
// ->  home.jsx -> hero -> doctor container

import React, { useState } from 'react';
import Hero from '../components/Hero';
import DoctorContainer from '../components/DoctorContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    console.log(data);

   const [doctor,setDoctor] = useState(data)

    const handleSearch = (e,text) =>{
        e.preventDefault();
        //console.log(text)


        if(text === "")
            return setDoctor(data)

        const searchedPhones = data.filter(doctor => 
            doctor?.name?.toLowerCase().split(' ').includes(text.toLowerCase())

        )

        //console.log(searchedPhones)
        setDoctor(searchedPhones)
    }

    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            {/* <PhonesContainer data={data}></PhonesContainer> */}
            <DoctorContainer data={doctor}></DoctorContainer>
        </div>
    );
};

export default Home;