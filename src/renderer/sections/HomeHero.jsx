import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'renderer/components/partials/Header'

const HomeHero = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'
    style={{
      gap: "5em",
    }}
    >
      <Header />
      <h1>
        Your One Stop Window For Daily Digitals
      </h1>
          <div className='hero d-flex justify-content-center text-align-center align-items-center'>
          <button>
          <Link to='/todo'>Get Started</Link>
          </button>
          {/* <button>
          <Link to='/todo'>Plan your day</Link>
          </button> */}
          </div>
      </div>
  )
}

export default HomeHero
