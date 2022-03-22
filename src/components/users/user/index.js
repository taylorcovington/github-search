import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useInteractions from '../../search/useInteractions';
import Repositories from './Repositories';
import UserProfile from './UserProfile';


const User = ({ username }) => {
  // this allows us to manage stage in one place still
  const { user, repos, onAfterGetUser, onAfterGetRepos } = useInteractions()

  const getRepos = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      onAfterGetRepos(json)
    })
    .catch(error => console.log("error: ", error))
  }

  // get additional user data - the endpoint is different if you want more data
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      onAfterGetUser(json)
      getRepos(json.repos_url)

    })
    .catch(error => console.log("error: ", error))
   
  }, [username])


  return (
    <div  style={{display: 'flex'}}>
    <aside style={{margin: '40px', padding: '40px'}}>
      <UserProfile user={ user }/>
      <Link style={{color: '#58a6ff', textDecoration: 'none'}} to="/" >
        Back to search
      </Link>
    </aside>
    <main style={{margin: '40px', padding: '40px'}}>
     <Repositories repos={repos}/>
    </main>
  </div>
  )
}

export default User