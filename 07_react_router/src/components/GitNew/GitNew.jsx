import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dhruvwadhwani7')
    //     .then(res=>res.json())
    //     .then(res=>setData(res))
    // },[])

  return (
    
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
        <p>Github followers:{data.followers}</p>
        <img src={data.avatar_url} alt="" width={200}/>
    </div>

    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dhruvwadhwani7')
    return response.json()
}