import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Store/Auth/auth.action'
import style from "../Styles/nav.module.css"
const Navbar = () => {
  
    const navigate=useNavigate()
    let dispatch=useDispatch();
    
    

  return (
    <div>
        <div className={style.navmain}>
            
            
            
            <p onClick={()=>navigate("/")}>Home</p>
            <p></p>
            
            
        </div>
    </div>
  )
}

export default Navbar