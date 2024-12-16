import React from 'react'
import Sidebar from './Sidebar'
import VedioContainer from "./VedioContainer"

const Home = () => {
  return (
    <div className='flex gap-5 mt-3'>
        <Sidebar />
        <VedioContainer />
    </div>
  )
}

export default Home