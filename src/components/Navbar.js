import React from 'react'
import "../styles/nav.css"
import { Link } from "react-router-dom"
import logo from "../data/data.json"

const Navbar = () => {
  return (
    <div className='nav'>

      <div className="logo">
        <Link to='/'>
          <img id="logoImage" src={logo} alt="Logo" />
        </Link>
      </div>
      
      <Link className="navlinks"  to="/#miphones">Mi Phones</Link>
      <Link className="navlinks"  to="/#redmiphones">Redmi Phones</Link>
      <Link className="navlinks"  to="/#tv">TV</Link>
      <Link className="navlinks"  to="/#laptops">Laptops</Link>
      <Link className="navlinks"  to="/#lifestyle">Fitness & Lifestyle</Link>
      <Link className="navlinks"  to="/#home">Home</Link>
      <Link className="navlinks"  to="/#audio">Radio</Link>
      <Link className="navlinks"  to="/#accessories">Accessories</Link>

    </div>
  )
}

export { Navbar }//ye agar default lga hota to curly bracket nhi hota...