import React from 'react'
import { userParams } from "react-router-dom";

const User = () => {
    const params = useParams()
  return (
    <div>I'm user {params.username}</div>
  )
}

export default User