import React from 'react';

function Card({channel}){
  console.log(channel);

  return(
    <div className='border-4 p-8'>
      <img className='w-full' src="https://images.unsplash.com/photo-1724583698704-94b3f4771c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="nature"
      />
      <div>
        <p>{channel || "hello add something"}</p>
      </div>
    </div>
  )
}
export default Card;