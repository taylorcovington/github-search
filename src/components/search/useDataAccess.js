import { useEffect } from 'react'

export default function useDataAccess({ 
  username, 
  onAfterGetResults, 
  onAfterGetUser,
  onAfterGetRepos
}) {

  const handleGetSearchData = (value) => {
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then(res => res.json())
      .then(json => {
        const { items: data, total_count: count } = json
        onAfterGetResults({data, count})
      })
      .catch(error => console.log("error: ", error))
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search
    console.log("submitted: ", value)
    handleGetSearchData(value)
  }
  return { onSubmit }
}
