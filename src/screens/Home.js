import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caro from '../components/Caro'

export default function Home() {
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div><Caro></Caro></div>
      <div className='m-3'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      <div><Footer></Footer></div>
    </div>
  )
}
