import { ComponentPropsWithRef } from 'react'

import clsx from 'clsx'

import s from './ui-textinput.module.scss'

type UiTextInputProps = {
  className: string
} & ComponentPropsWithRef<'input'>

export const UiTextInput = ({ className, ...props }: UiTextInputProps) => {
  return <input className={clsx(s.uiTextInput, className)} {...props} />
}
