import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [show,setShow] = useState(false);


  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/home">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" onClick={() => {setShow(!show)}}></span>
    </button>
    <div className={`${show ? 'collapse' : ''} navbar-collapse`} >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Log in</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar