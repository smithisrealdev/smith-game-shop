import React from 'react'
import { useRouter } from 'next/router'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import CategoryTotal  from "../../components/CategoryDetail/CategoryTotal";
function Store({ category }) {
    return (
        <AnimatePresence>
          {category && <CategoryTotal category={category} key="item" />}
        </AnimatePresence>
    );
  }


export default function Category() {
    const router = useRouter()
    const pid = router.query.categoryId
    return (
        <div>
            <AnimateSharedLayout type="crossfade">
               <Store category={pid}/>
            </AnimateSharedLayout>
        </div>
    )
}