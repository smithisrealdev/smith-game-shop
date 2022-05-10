
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadHtml from '../components/HeadHtml'
import WapperProduct from '../components/WapperProduct'
import ListProduct from '../components/Products/ListProduct'
export default function Home() {
  return (
    <div className='max-h-screen'>
      <HeadHtml />
      <Header />
      <div
        className='bg-search px-20 py-10 mt-16 flex flex-col'>
        <WapperProduct />
        <ListProduct />
      </div>
    </div>
  )
}
