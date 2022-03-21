import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <>
      <img className='userImageLg' src={user?.avatar_url} alt="" />
        <h3 style={{fontSize: '26px', marginBottom: '-10px'}}>
          {user?.name}
        </h3>
        <p style={{color: '#8b949e'}}>{user?.login}</p>
        <p style={{fontSize: '20px', fontWeight: ''}}>{user?.bio}</p>
        <p>{user?.company}</p>
        <p>{user?.location}</p>
        <p>{user?.email}</p>
    </>
  )
}

export default UserProfile