import { useEffect, useState } from 'react'

import s from './ui-select.module.scss'

type UiSelectProps = {
  className: string
}

const UiSelect = (className: UiSelectProps) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div className={s.uiSelect}>ui-select</div>
    </>
  )
}
