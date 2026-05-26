import React from 'react'
import { useParams } from 'react-router-dom'
const PremiumChat = () => {
    const {getUserId}=useParams()
    console.log(getUserId)
  return (
    <div>PremiumChat</div>
  )
}

export default PremiumChat