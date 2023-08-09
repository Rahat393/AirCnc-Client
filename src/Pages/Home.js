import React, { useEffect, useState } from 'react'
import SearchForm from '../Components/Form/SearchForm'
import ExpCard from '../Components/Card/ExpCard'
import { Link } from 'react-router-dom'
import HomeCard from '../Components/Card/HomeCard'
 const Home = () => {
  const [allExp , setAllExp] = useState([])
  useEffect( () => {
    fetch('expdata.json')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setAllExp(data)
    })
  },[])
  return (
    <div className='md:flex justify-center px-6 md:px-10 lg:px-20 gap-6'>
       <div className='mt-4'> <SearchForm/> </div>
       <div className=' flex-1'>
       <div className='flex justify-between mt-10 '>
          <p className='text-xl font-bold'>Homes</p>
          <Link to={'/comming-soon'}>
            <p className='underline'>See All</p>
          </Link>
        </div>
       <div className=' flex flex-wrap  '> 
        { [...Array(3)].map(( _, i) => <HomeCard
         key={i}
         
       />)}</div>
       <div>
        <div className='flex justify-between mt-9 '>
          <p className='text-xl font-bold'>Expriences</p>
          <Link to={'/comming-soon'}>
            <p className='underline'>See All</p>
          </Link>
        </div>
       <div className='md:flex justify-between'> 
        {allExp.map((exp, i) => <ExpCard
         key={i}
         exp={exp}
       />)}</div>
       </div>
       
       </div>
    </div>
  )
}

export default Home
