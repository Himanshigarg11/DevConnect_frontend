 import React from 'react'
 import { useParams } from 'react-router-dom'
 const chat = () => {
    const {targetUserId} =useParams();
    console.log(targetUserId)
   return (
     <div>chat</div>
   )
 }
 
 export default chat