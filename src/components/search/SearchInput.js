import Button from '../reusable/button/Button'

const SearchInput = () => {
  return (
    <div style={{display: 'flex'}}>
      <input 
        type="search" 
        name="search" 
        id="search"
        className="searchInput"
        placeholder="Search GitHub" 
      />
      <Button type="submit">Search</Button>
    </div>
  )
}

export default SearchInput