import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Filip from '../components/Filip'
import Victor from '../components/Victor'

export default function Home() {

  const [filip, setFilip] = useState(true)
  const [victor, setVictor] = useState(false)

  return (
    <>
      <div className="fv">
        <button className='button' onClick={() => {
          setFilip(true)
          setVictor(false)
        }}>FILIP</button>
        <button className='button' onClick={() => {
          setFilip(false)
          setVictor(true)
        }}>VICTOR</button>
      </div>
      {filip && <Filip />}
      {victor && <Victor />}
    </>
  )
}
