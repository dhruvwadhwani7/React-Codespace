import React from 'react'
import useGitStats from '../../hooks/useGitStats'
import { useState } from 'react';
import { Input } from 'react'
import useGitStatsMore from '../../hooks/useGitStatsMore';
function Github() {
    const [user,setUser] = useState("")
    const stats = useGitStatsMore(user)

  return (
    
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
        <input 
        className='bg-orange-700 p-2 rounded-lg'  
         type="text"
         placeholder='enter username'
         value={user}
         onChange={(e)=>setUser(e.target.value)} />

         {stats &&  
         <div>
            <p>Followers : {stats.followers}</p>
            <p>Repos: {stats.public_repos}</p>
            <img src={stats.avatar_url} className="mx-auto w-24 rounded-full"/>
        </div>}
    </div>

    
  )
}

export default Github