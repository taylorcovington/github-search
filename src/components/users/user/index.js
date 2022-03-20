import { Link } from 'react-router-dom';
import useDataAccess from '../../search/useDataAccess';
import useInteractions from '../../search/useInteractions';
import Repositories from './Repositories';
import UserProfile from './UserProfile';


const User = ({ username }) => {
  const { user, repos, onAfterGetUser, onAfterGetRepos } = useInteractions()
  const { loading } = useDataAccess({ username, onAfterGetUser, onAfterGetRepos })

  return (
    <div style={{display: 'flex'}}>
    <aside >
      <UserProfile user={ user }/>
      <Link to="/" >
        Back to search
      </Link>
    </aside>
    <main>
     <Repositories repos={repos}/>
    </main>
  </div>
  )
}

export default User