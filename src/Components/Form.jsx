import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getCartData} from '../Store/Main/main.action';
import style from "../Styles/form.module.css"

const Form = () => {
    const [number, setnumber] = useState("");
    const [cat, setcat] = useState("")
    const [diff, setdiff] = useState("")
    let dispatch=useDispatch()
    const navigate=useNavigate()
  return (
    <div className={style.main}>
        <div className={style.form}>
            <p>Set Up Your Quiz</p>
            <input type="text" placeholder='Enter Your Name' />
            <input type="number" placeholder='Enter number of Question' onChange={(e)=>setnumber(e.target.value)} />
            <select name="" id="" onChange={(e)=>setcat(e.target.value)}>
                <option value=""  >Select Category</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Science: Computers">Science: Computers</option>
                <option value="Sports">Sports</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
                <option value="Politics">Politics</option>
                
            </select>
            <select name="" id=""  onChange={(e)=>setdiff(e.target.value)} >
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            
            <button onClick={()=>dispatch(getCartData({number:number,category:cat,difficulty:diff},navigate))}>Start Quiz</button>
        </div>
        
    </div>
  )
}

export default Form