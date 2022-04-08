import React from 'react'
import { Link } from 'react-router-dom'
import Countries from './Countries'

const Error = () => {
  return (
    <div>
        <h3>Hey Man, Wrong Page</h3>
        <Link to={Countries}>Go Home</Link>
    </div>
  )
}

export default Error