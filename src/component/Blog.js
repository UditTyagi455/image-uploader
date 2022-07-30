import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Axios from "axios";
import "./Blog.css"

const Blog = () => {
   const [apiData,setApiData] = useState("");

   const getData = async () => {
         const url = "https://jsonplaceholder.typicode.com/posts";
         const {data} = await Axios.get(url);
         console.log("Api data :- ",data);
         setApiData(data);
   }

   useEffect(()=>{
     getData();
   },[])


  return (
    <>
    <Navbar/>
    <h1 className='text-center text-uppercase text-danger m-4'>Blogs</h1>
    <div className='all_api_data'>
        {apiData ? apiData.map(data => (
            <div key={data.id} className="api_data_body"><span className='data_id'> {data.id}. </span> {data.body} </div>
        )) : ""}
    </div>
    </>
  )
}

export default Blog