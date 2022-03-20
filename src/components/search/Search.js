import SearchInput from "./SearchInput"
import './search.css'

const Search = () => {
  return (
    <div className="searchContainer">
      <h2>Search more than 87M users</h2>
      <form action="">
        <SearchInput />
      </form>
    </div>
  )
}

export default Search