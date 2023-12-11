import React from 'react'
import Image from 'next/image';
import style from "./page.module.css"
function SubCode(params) {
    
    const code=params.params.subcode
   const setcode=code[1];
    
  return (
    <div>
          <div className={style.imgcon}>
                <Image src={`/${setcode}.png`} className={style.image} height={500} width={600} Style={{}}/>             
          </div>
    </div>

  )
}

export default SubCode