'use client'
import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

import s from './ui-accordion.module.scss'

type UiAccordionRootProps = {
  children: ReactNode
  className?: string
} & (
  | {
      collapsible: boolean
      defaultValue?: string
      type: 'single'
    }
  | { defaultValue?: string[]; type: 'multiple' }
)

export const UiAccordionRoot = (props: UiAccordionRootProps) => {
  if (props.type === 'multiple') {
    return (
      <Accordion.Root
        className={clsx(s.accordionRoot, props.className)}
        defaultValue={props.defaultValue}
        type={props.type}
      >
        {props.children}
      </Accordion.Root>
    )
  }

  return (
    <Accordion.Root
      className={clsx(s.accordionRoot, props.className)}
      collapsible={props.collapsible}
      defaultValue={props.defaultValue}
      type={props.type}
    >
      {props.children}
    </Accordion.Root>
  )
}

/*------------------- AccordionItem -------------------- */

type UiAccordionItemProps = {
  children: ReactNode
  className?: string
  value: string
}

export const UiAccordionItem = forwardRef<HTMLDivElement, UiAccordionItemProps>(
  ({ children, className, value, ...props }, ref) => (
    <Accordion.Item className={clsx(s.accordionItem, className)} value={value} {...props} ref={ref}>
      {children}
    </Accordion.Item>
  )
)

/*------------------- AccordionTrigger -------------------- */
type UiAccordionTriggerProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithRef<'button'>

export const UiAccordionTrigger = forwardRef<HTMLButtonElement, UiAccordionTriggerProps>(
  ({ children, className, ...props }: UiAccordionTriggerProps, ref) => (
    <Accordion.Header className={s.accordionHeader}>
      <Accordion.Trigger className={clsx(s.accordionTrigger, className)} {...props} ref={ref}>
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
)

/*------------------- AccordionContent -------------------- */
type UiAccordionContentProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithRef<'div'>

export const UiAccordionContent = forwardRef<HTMLDivElement, UiAccordionContentProps>(
  ({ children, className, ...props }, ref) => (
    <Accordion.Content className={clsx(s.accordionContent, className)} {...props} ref={ref}>
      {children}
    </Accordion.Content>
  )
)
