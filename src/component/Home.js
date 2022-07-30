import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import "./Home.css"

const Home = () => {
    const [timeTo,setTimeTo] = useState("")

    var hours = new Date().getHours();
    console.log(hours)

    
    useEffect(() =>{
        console.log("i am in useEffect hook!")
        if(hours >= 1 && hours <=12 ){
            setTimeTo("Morning");
        } else if (hours >12 && hours <= 16){
            setTimeTo("Afternoon")
        } else if(hours >16 && hours <= 19) {
            setTimeTo("Evening");
        } else {
            setTimeTo("night")
        }
    },[hours])

  return (
    <div>
        <Navbar/>
        <div className='background-img'>
            <h1 className='headingone'>Good {timeTo}, Mr. Udit </h1>
         <img src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' alt="background-image"/>
        </div>
    </div>
  )
}

export default Home