import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    // i want that only the api calls when this function runs or user calls then only 

    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))

    },[currency])
    console.log(data)
    return data
    // return [data,setData]
}

export default useCurrencyInfo;

//api call https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json