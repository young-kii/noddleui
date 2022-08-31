import {useEffect, useState} from "react";
import {MyContext} from "./Config";

export default () => {
    const [a,setA] = useState()
    useEffect(()=>{
        const b = document.getElementById('noddle_Config')
        setA(b)
    },[])
    const zh = {
        name:{
            young:'顾逸轩'
        }
    }
    const en = {
        name:{
            young:'young'
        }
    }
    return () => {
        return a
    }
}