import SearchInput from "./SearchInput"
import './search.css'
import useInteractions from "./useInteractions"
import useDataAccess from "./useDataAccess"

const Search = () => {

  const { data, onAfterGetResults } = useInteractions()
  const { onSubmit } = useDataAccess({ onAfterGetResults });

  return (
    <div className="searchContainer">
      <h2>Search more than 87M users</h2>
      <form onSubmit={onSubmit}>
        <SearchInput />
      </form>
    </div>
  )
}

export default Search