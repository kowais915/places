import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import {  createClient } from 'contentful' 
import Card from '../components/Card'
import Footer from '@/components/Footer'


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
  const placeObj = place[0].fields
  const meta = place[0].fields.picture[0]
  console.log(meta)
  return (
    <>
      
      <Navbar/>
      <h3 style={{textAlign: 'center', marginBottom: '30px'}}>This is places</h3>
      <div className={styles.container   }>
      {place.map((place) => {
        return (
          <div key={place.sys.id}>
            
            <Card title ={place.fields.place} description={meta.fields.description}/>
            
            
          </div>
        )
      })}

  
      </div>
      <Footer/>
      

    </>
  )
}
