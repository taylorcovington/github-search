import './styles.css'
import UserItem from './UserItem'
const UserList = ({users, count}) => {
  return (
    <div style={{marginTop: '40px'}}>
      <p>{count} user{count > 1 && "'s"} found</p>
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