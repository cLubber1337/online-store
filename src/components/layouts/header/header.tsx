import { HeaderActions } from '@/components/header-actions/header-actions'
import { Container } from '@/components/layouts'
import { Logo } from '@/components/logo/logo'
import { Search } from '@/components/search/search'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Logo />
          <Search />
          <HeaderActions />
        </div>
      </Container>
    </header>
  )
}
