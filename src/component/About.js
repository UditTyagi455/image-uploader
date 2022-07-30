import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import "./About.css"


const About = () => {

    const [aboutData, setAboutData] = useState("");

    const getApiData = async () => {
        const { data } = await axios.get("http://localhost:3000/posts");
        console.log(data);
        setAboutData(data);

    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <Navbar />
            <div className='main'>
                    {aboutData ? aboutData.map(data => (
                        <div key={data.id} className="main_class">
                           <img src={data.img} alt="my_pic" width="250px" height="250px"/>
                           <h2 className='heading2 text-danger'>{data.Name}</h2>
                        </div>
                    )) : ""}
            </div>
        </>
    )
}

export default About