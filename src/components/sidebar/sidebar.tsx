import { ReactNode } from 'react'

import s from './sidebar.module.scss'

type SidebarProps = {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className={s.sidebar}>
      <div className={s.inner}>{children}</div>
    </aside>
  )
}
