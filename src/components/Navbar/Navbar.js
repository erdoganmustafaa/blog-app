import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/home"><h1>Mustafa Blog</h1></Link>
        
        <div className='links'>
        <Link to='/home'>Home</Link>
        <Link to='/create' className='new-post' style={{
            fontSize:"16px",
            textAlign:"center",
            width:"100%",
            color:'white',
            backgroundColor:"#ff793f",
            borderRadius:"8px"
        }}
        >Create a Post</Link>
        </div>
    </nav>
  )
}

export default Navbar;