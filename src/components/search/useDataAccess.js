export default function useDataAccess({ onAfterGetResults }) {

  const handleGetSearchData = (value) => {
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then(res => res.json())
      .then(json => {
        const { items: data, total_count: count } = json
        onAfterGetResults({data, count})
      })
      .catch(error => console.log("error: ", error))
  }

  const getUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        onAfterGetResults(json)
      })
      .catch(error => console.log("error: ", error))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.search
    console.log("submitted: ", value)
    handleGetSearchData(value)
  }
  return { onSubmit, getUser }
}
