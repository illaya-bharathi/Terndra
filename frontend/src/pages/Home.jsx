import React from 'react'
import Destination from '../components/Destination'
import Filter from '../components/Filter'
import TravelList from '../components/Travlers'

const Home = () => {
  return (
<div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
  {/* Left side - Filter */}
  <div className="lg:col-span-1 mt-3">
    <Filter />
  </div>

  {/* Right side - Destination + TravelList */}
  <div className="lg:col-span-3 flex flex-col gap-4">
    <Destination />
    <TravelList />
  </div>
</div>





  )
}

export default Home