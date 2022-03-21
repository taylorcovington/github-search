import '../styles.css'

const RepositoryItem = ({repo}) => {
  return (
    <div className="repoContainer">
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <a 
          style={{color: '#58a6ff', textDecoration: "none"}} 
          href={repo.html_url}
        >
          {repo.name}
        </a>
        <div style={{border: '1px solid gray', borderRadius: '10px', padding: '4px'}}>
          {repo?.private ? 'private' : 'public'}
        </div>
      </div>
     <div>
       <span style={{color: '#8b949e'}}>{repo.language}</span>
     </div>
    </div>
  )
}

export default RepositoryItem