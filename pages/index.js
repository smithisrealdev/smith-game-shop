
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
           <div className='float-left  w-full bg-search flex flex-col h-screen'>
              <WapperProduct />
              <ListProduct />
         </div>
    </div>
  )
}
