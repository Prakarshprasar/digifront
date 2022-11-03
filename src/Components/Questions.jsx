import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import style from "../Styles/ques.module.css"

const Questions = () => {
    const [i, seti] = useState(0)
    const [ans, setans] = useState("")
    const [countp, setcountp] = useState(0)
    const {cart}=useSelector((state)=>state.cart);

    
    // console.log(cart)
    const navigate=useNavigate()
    
    const btnmove=()=>{
        if(i<cart.length-1){
            seti(i+1)
        }else{
            navigate("/result")
        }
    }
    const checkAns=(el)=>{
        setans(el)
        if(cart[i].correct_answer==el){
            alert("Correct Ans")
            setcountp(countp+1)
            if(i<cart.length-1){
                seti(i+1)
            }else{
                navigate("/result")
            }
            

        }else{
            
            alert("Wrong Ans")
            if(i<cart.length-1){
                seti(i+1)
            }else{
                navigate("/result")
            }
            
           
        }
    }
    useEffect(()=>{
        localStorage.setItem("res",JSON.stringify({pass:countp,fail:cart.length-countp,total:cart.length}))
    },[countp])
    
    
  return (
    <div className={style.main}>
        <div className={style.ques}>
            <p>{i+1}. {cart[i].question}</p>
            <div className={cart[i].type=="multiple"?style.showdiv:style.none}>
                <div onClick={(e)=>{checkAns(e.target.innerText)}} >{cart[i].incorrect_answers[0]}</div>
                <div onClick={(e)=>{checkAns(e.target.innerText)}} >{cart[i].incorrect_answers[1]}</div>
                <div onClick={(e)=>{checkAns(e.target.innerText)}} >{cart[i].correct_answer}</div>
                <div onClick={(e)=>{checkAns(e.target.innerText)}} >{cart[i].incorrect_answers[2]}</div>
            </div>
            
            <div className={cart[i].type!="multiple"?style.showdiv:style.none}>
                <div onClick={(e)=>{checkAns(e.target.innerText)}}>True</div>
                <div onClick={(e)=>{checkAns(e.target.innerText)}}>False</div>
            </div>
            
            <div className={style.btndiv}>
                <button onClick={()=>seti(i-1)} disabled={i<=0}>Prev</button>
                <button onClick={btnmove}>{i>=cart.length-1?"Submit":"Next"}</button>
            </div>
        </div>
    </div>
  )
}

export default Questions