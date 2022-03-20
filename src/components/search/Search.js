import SearchInput from "./SearchInput"
import './search.css'
import useInteractions from "./useInteractions"
import useDataAccess from "./useDataAccess"
import UserList from "../users/UserList"

const Search = () => {

  const { data, count, onAfterGetResults } = useInteractions()
  const { onSubmit } = useDataAccess({ onAfterGetResults });

  return (
    <div className="searchContainer">
      <h2>Search more than 87M users</h2>
      <form onSubmit={onSubmit}>
        <SearchInput />
      </form>
      {data?.length ? (
        <UserList users={data}/>
      ): (
        <></>
      )
      }
    </div>
  )
}

export default Search