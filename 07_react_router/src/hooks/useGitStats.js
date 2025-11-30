import { useEffect, useState } from "react"
function useGitStats(username){

    const [data,seData] = useState({})

    useEffect(()=>{
        if(!username) return;
        fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then((res)=>seData(res))
        console.log(data)
    },[username])
    console.log(data)
    return data;

}
export default useGitStats;