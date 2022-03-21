import { Link } from 'react-router-dom';

const UserItem = ({username, avatarUrl}) => {
  return (
    <div style={{display: 'flex', marginTop: '15px'}}>
      <img className='userImageSm' src={avatarUrl} alt="" />
      <div style={{marginLeft: '15px'}}>
        <Link style={{color: 'white', textDecoration: 'none'}} to={`/user/${username}`} >
          {username}
        </Link>
      </div>
    </div>
  )
}

export default UserItem