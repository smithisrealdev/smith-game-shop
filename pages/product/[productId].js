import React from 'react'
import { useRouter } from 'next/router'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Products  from "../../components/CardProduct/Products";
function Store({ id }) {
    return (
        <AnimatePresence>
          {id && <Products ids={id} key="item" />}
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
