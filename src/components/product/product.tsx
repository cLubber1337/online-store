import type { Product as ProductType } from '@/services/api/fetch-products'

import { memo } from 'react'

import { UiButton } from '@/components/ui-kit'
import clsx from 'clsx'
import Image from 'next/image'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { TiStar } from 'react-icons/ti'

import s from './product.module.scss'

type ProductProps = {
  className?: string
  product: ProductType
}

export const Product = memo(({ className, product }: ProductProps) => {
  const { description, price, rating, thumbnail, title } = product

  return (
    <div className={clsx(s.product, className)}>
      <div className={s.imgWrapper}>
        <Image
          alt={title}
          height={193}
          priority
          src={thumbnail}
          style={{ height: 'auto', maxHeight: '193px', maxWidth: '100%' }}
          width={193}
        />
      </div>
      <div className={s.info}>
        <span className={s.price}>{price} $</span>
        <span className={s.title}>{title}</span>
        <span className={s.description}>{description}</span>
        <span className={s.rating}>
          <TiStar className={s.starIcon} /> {rating.toFixed(1)}
        </span>
      </div>
      <div className={s.actions}>
        <UiButton className={s.addToCartBtn} fullWidth>
          <TbShoppingCartPlus className={s.addToCartIcon} />
        </UiButton>
      </div>
    </div>
  )
})
