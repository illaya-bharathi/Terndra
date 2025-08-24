import React from 'react'
import Destination from '../components/Destination'
import Filter from '../components/Filter'
import TravelList from '../components/Travlers'

const Home = () => {
  return (
//  <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
 
//   <div className="lg:col-span-1 mt-3">
//    <Destination />
//   </div>

//   <div className="lg:col-span-3 flex flex-col gap-4">
   
//     <TravelList />
//   </div>
// </div> 

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
  {/* Row 1 - Destination (not full width, only 3 cols and centered) */}
  <div className="lg:col-span-3 lg:col-start-2">
    <Destination />
  </div>

  {/* Row 2 - Filter + TravelList */}
  <div className="lg:col-span-1">
    <Filter />
  </div>
  <div className="lg:col-span-3">
    <TravelList />
  </div>
</div>









  )
}

export default Home