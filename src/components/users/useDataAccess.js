export default function useDataAccess({ onAfterGetResults }) {

  const handleGetSearchData = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        onAfterGetResults(json)
      })
      .catch(error => console.log("error: ", error))
  }

  return { handleGetSearchData }
}
