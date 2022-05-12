
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import HeadHtml from '../components/HeadHtml'
import WapperProduct from '../components/WapperProduct'
import ListProduct from '../components/Product/ListProduct'
import { motion,AnimateSharedLayout, AnimatePresence } from "framer-motion";
export default function Home() {
  return (
    <div className='max-h-screen'>
      <Header />
      <AnimateSharedLayout>
        <motion.div
          className='bg-search px-20 py-10 mt-16 flex flex-col'>
          <WapperProduct />
          <ListProduct />
        </motion.div>
      </AnimateSharedLayout>
      <Footer />
    </div>
  )
}
