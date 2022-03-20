import { useState } from "react"

export default function useInteractions() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [user, setUser] = useState()
  const [repos, setRepos] =  useState()

  const onAfterGetResults = ({ data, count }) => {
    setData(data)
    setCount(count)
  }

  const onAfterGetUser = (data) => {
    console.log('data inside user, ', data)
    setUser(data)
  }
  const onAfterGetRepos = (data) => {
    console.log('data inside repos', data)
    setRepos(data)
  }

  return { 
    data, 
    count, 
    user, 
    repos, 
    onAfterGetUser, 
    onAfterGetRepos,
    onAfterGetResults
  }
}
