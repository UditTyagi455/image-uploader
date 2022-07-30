import React,{useState} from 'react'
import Navbar from './Navbar';
import axios from 'axios';

const Contactus = () => {
   const uniqueId = () => parseInt(Date.now() * Math.random());
   const [id,setId] =useState(uniqueId);
   const [Name,setName] =useState("");
   const [img,setImg] =useState("");

   
   const handleSubmit = async (e) => {
    e.preventDefault();
    const myData = {id,Name,img};
    const data = await axios.post("http://localhost:3000/posts",myData)
                  .then(response => alert("data posted"));
    setName("");
    setImg("")

   }

   const uploadImage =async (e) => {
    // setImg(URL.createObjectURL(e.target.files[0]))
    const file = e.target.files[0];
    const base64 = await base64convert(file);
    setImg(base64)
   }

   function base64convert(file) {
     return new Promise((resolve,reject) =>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };

        fileReader.onerror = (error) => {
            reject(error);
        }
     })
   }

    return (
        <div>
            <Navbar />
            <div>
                <form className='container row justify-content-center' onSubmit={handleSubmit}>
                    <div className='col col-lg-6'> 
                    <div className="mb-3 r">
                        <label htmlFor="exampleInputEmail1" className="form-label">Unique Id </label>
                        <input disabled type="text" className="form-control" value={id} />
                       
                    </div>
                    <div className="mb-3 r">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" placeholder="Enter your name" className="form-control" value={Name} onChange={(e)=> {setName(e.target.value)}}/>
                       
                    </div>
                    <div className="mb-3 r">
                        <label htmlFor="exampleInputEmail1" className="form-label">Picture</label>
                        <input type="file" placeholder='Enter image' className="form-control" onChange={uploadImage}/>
                       
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contactus