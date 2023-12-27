import Image from 'next/image'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { TiStar } from 'react-icons/ti'

import s from './product.module.scss'

import { UiButton } from '../ui-kit'

type ProductProps = {
  className?: string
}

export const Product = ({ className }: ProductProps) => {
  return (
    <div className={s.product}>
      <div className={s.imgWrapper}>
        <Image
          alt={'iPhone 9'}
          height={200}
          priority
          src={'https://i.dummyjson.com/data/products/12/thumbnail.jpg'}
          width={200}
        />
      </div>
      <div className={s.info}>
        <span className={s.price}>19,99 $</span>
        <span className={s.title}>iPhone 9</span>
        <span className={s.description}>
          Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty
        </span>
        <span className={s.rating}>
          <TiStar className={s.starIcon} /> 5
        </span>
      </div>
      <div className={s.actions}>
        <UiButton className={s.addToCartBtn} fullWidth>
          <TbShoppingCartPlus className={s.addToCartIcon} />
        </UiButton>
      </div>
    </div>
  )
}
