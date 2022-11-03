import { ADD_TO_CART, GET_ALL_CART_ITEMS} from "./main.type"
import axios from "axios"
export const getCartData=(obj,navigate)=>(dispatch)=>{
    console.log(obj)
    let url
    if(obj.category==""&&obj.difficulty==""){
        url="https://prakquesbank.herokuapp.com/ques/ques"
    }
    else if(obj.category!=""&&obj.difficulty==""){
        url=`https://prakquesbank.herokuapp.com/ques/ques?category=${obj.category}`
    }else if(obj.category==""&&obj.difficulty!=""){
        url=`https://prakquesbank.herokuapp.com/ques/ques?difficulty=${obj.difficulty}`
    }else if(obj.category!=""&&obj.difficulty!=""){
        url=`https://prakquesbank.herokuapp.com/ques/ques?category=${obj.category}&difficulty=${obj.difficulty}`
    }
    
      
    
    axios.get(url,{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{
        // console.log(res.data,"before")
        let arr=[];
        if(obj.number!=""){
            if(res.data.length>+obj.number){
                for(let i=0;i<+obj.number;i++){
                    arr.push(res.data[i])
                }
            }else{
                arr=res.data;
            }
        }else{
            arr=res.data
        }
        

        dispatch({type:GET_ALL_CART_ITEMS,payload:arr})
        navigate("/quiz")
    })
}

export const addToCart=(obj)=>(dispatch)=>{
    console.log(obj)
    axios.post("https://prakquesbank.herokuapp.com/ques/ques",obj,{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{
        console.log(res.data)
        
        dispatch({type:ADD_TO_CART,payload:res.data})
    })
}

// export const removeFromCart=(id)=>(dispatch)=>{
//     axios.delete(`https://cartlistprak.herokuapp.com/user/main/${id}`,{
//         headers:{"Access-Control-Allow-Origin":"*"}
//     })
//     .then((res)=>{
//         console.log(res)
//         alert("Job Ad removed from list")
//         dispatch({type:REMOVE_FROM_CART,payload:res.data})
//     })
// }

