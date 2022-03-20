import React from 'react'

const Repositories = ({repos}) => {
  return (
    <>
      <h2>Popular Repositories</h2>
      <ul>
        {repos?.map(repo => (
          <li>
            <a style={{color: 'white', textDecoration: "none"}} href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Repositories