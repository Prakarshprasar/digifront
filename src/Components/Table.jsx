import React from 'react';
import style from "../Styles/table.module.css"

const Table = () => {
    let obj=JSON.parse(localStorage.getItem("res"))||{}
  return (
    
    <>
    <div className={style.main}></div>
            <tr>
                <th>Total Questions</th>
                <th>Total Correct</th>
                <th>Total Wrong</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>{obj.total}</td>
                <td>{obj.pass}</td>
                <td>{obj.fail}</td>
                <td>{((+obj.pass/+obj.total)*100).toFixed(1)}</td>
            </tr>

        
    </>
  )
}

export default Table