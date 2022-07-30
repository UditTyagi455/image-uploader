import React,{useState} from 'react';
import { Link,Outlet } from 'react-router-dom';
import "./Myform.css"
import Navbar from './Navbar';

const Myform = () => {

    const [emailData,setEmailData] =useState("");
    const [passwordData,setPasswordData] =useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
        console.log("email is :- ",emailData);
        console.log("password is :- ",passwordData);
        setEmailData("");
        setPasswordData("");
    }

    const buttonClick = () =>{
        alert("please fill the correct data! ")
    }

    return (
        <>
        <Navbar/>
        <div className='main_form_cls'>
            <form onSubmit={handleSubmit} className="login_data">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" placeholder='Enter Email Address' className="form-control" value={emailData} onChange={(e) => setEmailData(e.target.value)}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder='Enter Your Password' className="form-control" value={passwordData} onChange={(e) => setPasswordData(e.target.value)}/>
                </div>
                
                  {emailData === "udittyagi455@gmail.com" && passwordData === "123@Udittyagi" ? <Link to="/home"><button type="submit" className="btn btn-primary">Submit</button></Link> : <button type="submit" className="btn btn-primary" onClick={buttonClick}>Submit</button>}
            </form>
            <Outlet/>
        </div>
        </>
    )
}

export default Myform