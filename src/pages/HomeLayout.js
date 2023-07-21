import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Preloader from '../components/Preloader'
import React from 'react'
import Footer from '../components/Footer'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <div className="container container-page">
        {isPageLoading ? <Preloader /> : <Outlet />}
      </div>
      <Footer />
    </>
  )
}
export default HomeLayout
