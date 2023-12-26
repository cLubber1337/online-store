import { UiButton } from '@/components/ui-kit'

import s from './header-actions.module.scss'

type HeaderActionsProps = {}

export const HeaderActions = ({}: HeaderActionsProps) => {
  return (
    <div className={s.headerActions}>
      <UiButton>Login</UiButton>
    </div>
  )
}
