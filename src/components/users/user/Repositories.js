import Button from '../../reusable/button/Button'
import RepositoryItem from './RepositoryItem'

const Repositories = ({repos}) => {
  return (
    <>
      <h2>Popular Repositories</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos?.map(repo => (
          <RepositoryItem key={repo.id} repo={repo}/>
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button>See more</Button>
        </div>
      </div>
    </>
  )
}

export default Repositories