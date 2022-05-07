
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadHtml from '../components/HeadHtml'
import WapperProduct from '../components/WapperProduct'

export default function Home() {
  return (
    <div className='max-h-screen'>
      <HeadHtml />
      <Header />
      <div className='bg-search h-screen'>
         <div className='flex'>
             
           {/* <div className='float-right bg-green-500 w-full h-screen'>
              center
           </div> */}
           <div className='float-left w-full h-screen'>
              <WapperProduct />
           </div>
          
         </div>
      </div>
    </div>
  )
}
