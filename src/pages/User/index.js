import './style.css';
import User from '../../components/users/user';

export function UserIndex(props) {
  const {username} = props.match.params
  return (
    <User username={username}/>
  );
}
