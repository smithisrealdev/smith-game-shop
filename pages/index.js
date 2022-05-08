
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadHtml from '../components/HeadHtml'
import WapperProduct from '../components/WapperProduct'
import ListProduct from '../components/ListProduct'
export default function Home() {
  return (
    <div className='max-h-screen'>
      <HeadHtml />
      <Header />
         <div className=' bg-search h-screen flex px-20 py-8'>
           <div className='float-left w-full h-screen'>
              <WapperProduct />
              <ListProduct />
           </div>
         </div>
    </div>
  )
}
