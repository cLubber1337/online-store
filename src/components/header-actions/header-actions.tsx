import { UiButton } from '@/components/ui-kit'
import { HiOutlineShoppingCart } from 'react-icons/hi'

import s from './header-actions.module.scss'

type HeaderActionsProps = {}

export const HeaderActions = ({}: HeaderActionsProps) => {
  return (
    <div className={s.headerActions}>
      <UiButton variant={'clean'}>
        <HiOutlineShoppingCart className={s.cartIcon} />
      </UiButton>
      <UiButton>Login</UiButton>
    </div>
  )
}
