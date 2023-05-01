import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import {  createClient } from 'contentful' 

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
    

  })

  const res = await client.getEntries({ content_type: process.env.CONTENFUL_CONTENT_TYPE})
  console.log(res)


  return {
    props: { place: res.items }
  }
}

export default function Home({ place}) {
  console.log(place)
  return (
    <>
      
      <Navbar/>
      <h1>This is places</h1>
      {place.map((place) => {
        return (
          <div key={place.sys.id}>
            <h2>{place.fields.place}</h2>
            
            
          </div>
        )
      })}

      

    </>
  )
}
