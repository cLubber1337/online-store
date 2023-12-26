import s from './search.module.scss'

export const Search = () => {
  return (
    <div className={s.search}>
      <input className={s.input} placeholder={'Search...'} type={'text'} />
    </div>
  )
}
