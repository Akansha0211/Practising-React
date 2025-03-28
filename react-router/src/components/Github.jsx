import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   // component loads , useEffect is called
  //   fetch('https://api.github.com/users/Akansha0211')
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])

  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/Akansha0211')
  return response.json()
}