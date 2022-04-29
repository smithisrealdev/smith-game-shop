
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadHtml from '../components/HeadHtml'
export default function Home() {
  return (
    <div className='max-h-screen'>
      <HeadHtml />
      <Header />
      <div className='bg-search h-screen'>

      </div>
    </div>
  )
}
