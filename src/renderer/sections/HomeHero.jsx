import React from 'react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1>
        Your One Stop Window For Daily Digitals
      </h1>
          <div className='hero d-flex justify-content-center text-align-center align-items-center'>
          <button>
          <Link to='/addevent'>Add Event</Link>
          </button>
          <button>
          <Link to='/todo'>Plan your day</Link>
          </button>
          <button>World</button>
          </div>
      </div>
  )
}

export default HomeHero
