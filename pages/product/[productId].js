import React from 'react'
import { useRouter } from 'next/router'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Product  from "../../components/CardProduct/Products";
function Store({ id }) {
    return (
        <AnimatePresence>
          {id && <Product ids={id} key="item" />}
        </AnimatePresence>
    );
  }


export default function Products() {
    const router = useRouter()
    const pid = router.query.productId
    return (
        <div>
            <AnimateSharedLayout type="crossfade">
               <Store id={pid}/>
            </AnimateSharedLayout>
        </div>
    )
}
