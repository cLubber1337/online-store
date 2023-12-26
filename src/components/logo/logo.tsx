import Link from 'next/link'

import s from './logo.module.scss'

export const Logo = () => {
  return (
    <Link className={s.logo} href={'/'}>
      <div className={s.logoImage}></div>
    </Link>
  )
}
