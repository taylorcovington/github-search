import { Link } from 'react-router-dom';
import useDataAccess from '../../search/useDataAccess';
import useInteractions from '../../search/useInteractions';
import Repositories from './Repositories';
import UserProfile from './UserProfile';


const User = ({ username }) => {
  const { user, repos, onAfterGetUser, onAfterGetRepos } = useInteractions()
  const { loading } = useDataAccess({ username, onAfterGetUser, onAfterGetRepos })

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