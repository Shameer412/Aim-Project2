import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero-Banner'
import Aboutus from '../components/Aboutus'
import Goals from "../components/Goals"
import Choose from "../components/Choose"
import Services1 from "../components/Services1"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Aboutus/>
    <Goals/>
    <Choose/>
    <Services1/>
    <Footer/>
    </>
  )
}

export default Home