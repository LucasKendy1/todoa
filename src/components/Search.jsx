import styles from './Search.module.css'

const Search = ({search, setSearch}) => {
  return (
    <div className={styles.main}>
      <h2>Pesquisar</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar..." className={styles.input} />
    </div>
  )
}

export default Search
