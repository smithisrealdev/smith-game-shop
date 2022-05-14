import React from 'react'
import { useRouter } from 'next/router'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Detail  from "../../components/CardProduct/Detail";
function Store({ id }) {
    const imageHasLoaded = true;
    return (
      <>
        {/* <List selectedId={id} /> */}
        <AnimatePresence>
          {id && <Detail ids={id} key="item" />}
        </AnimatePresence>
      </>
    );
  }


export default function Products() {
    const router = useRouter()
    const pid = router.query.productId
    return (
        <div className="container">
            <AnimateSharedLayout type="crossfade">
               <Store id={pid}/>
            </AnimateSharedLayout>
        </div>
    )
}
