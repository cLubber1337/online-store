import { ComponentPropsWithRef, ReactNode, use, useContext, useState, useTransition } from 'react'

import clsx from 'clsx'

import s from './ui-button.module.scss'

type UiButtonProps = {
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'clean' | 'outline' | 'primary'
} & ComponentPropsWithRef<'button'>

export const UiButton = ({
  children,
  className,
  fullWidth,
  variant = 'primary',
  ...props
}: UiButtonProps) => {
  return (
    <button
      className={clsx(s.uiButton, s[variant], fullWidth && s.fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  )
}
