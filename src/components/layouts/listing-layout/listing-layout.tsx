import { ReactNode, memo } from 'react'

import s from './listing-layout.module.scss'

type ListingLayoutProps = {
  left: ReactNode
  right: ReactNode
}

export const ListingLayout = memo(({ left, right }: ListingLayoutProps) => {
  return (
    <div className={s.listingLayout}>
      <div className={s.listingLayoutLeft}>{left}</div>
      <div className={s.listingLayoutRight}>{right}</div>
    </div>
  )
})
