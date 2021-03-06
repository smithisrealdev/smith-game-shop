import WapperProduct from '../components/WapperProduct'
import ListProduct from '../components/Product/ListProduct'
import { motion, AnimateSharedLayout } from "framer-motion";

export default function Home() {
  return (
    <div className='bg-search'>
      <AnimateSharedLayout>
        <motion.div
          className='container mx-auto px-4 pt-10'>
          <WapperProduct />
          <ListProduct />
        </motion.div>
      </AnimateSharedLayout>
    </div>
  )
}
