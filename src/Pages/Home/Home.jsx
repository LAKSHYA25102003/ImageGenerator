import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import SearchForm from '../../Component/SearchForm/SearchForm'
import TopText from '../../Component/TopText/TopText'
import StaticImages from '../../Component/StaticImages/StaticImages'
import Form from '../../Component/FormDialog/Form'
import UserComicStrip from '../../Component/UserComicStrip/UserComicStrip'

function Home() {
  return (
    <div className='bg-[#111827] min-h-screen'>
        <Navbar/>
        <TopText/>
        <SearchForm/>
        <UserComicStrip/>
        <StaticImages/>
        <Form/>
    </div>
  )
}

export default Home