import { ReactNode } from 'react'

import s from './container.module.scss'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={s.container}>{children}</div>
}
