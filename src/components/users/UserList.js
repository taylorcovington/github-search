import './styles.css'
import UserItem from './UserItem'
const UserList = ({users}) => {
  return (
    <div style={{marginTop: '40px'}}>
      {users.map(user => {
        console.log('user: ', user)
        const { id, login: username, avatar_url: avatarUrl, repos_url, html_url } = user
        return(
          <UserItem key={id} username={username} avatarUrl={avatarUrl}/>
        )
      })}
    </div>
  )
}

export default UserList