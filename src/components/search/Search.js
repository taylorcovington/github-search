import SearchInput from "./SearchInput"
import './search.css'
import useInteractions from "./useInteractions"
import useDataAccess from "./useDataAccess"
import UserList from "../users/UserList"

const Search = () => {

  // I wanted to show a use case of creating custom hooks
  // This is something we do to manage our state instead of using context or redux
  // We do use context in other parts of the app, but it's too much for this.
  const { data, count, onAfterGetResults } = useInteractions()
  const { onSubmit } = useDataAccess({ onAfterGetResults });

  return (
    <div className="searchContainer">
      <h2>Search more than 87M users</h2>
      <form onSubmit={onSubmit}>
        <SearchInput />
      </form>
      {data?.length ? (
        <UserList users={data} count={count}/>
      ): (
        <></>
      )
      }
    </div>
  )
}

export default Search