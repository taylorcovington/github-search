import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <>
      <img className='userImage' src={user?.avatar_url} alt="" />
        <p>
          {user?.name}
        </p>
        <p>
          {user?.login}
        </p>
        <p>
          {user?.bio}
        </p>
        <p>
          {user?.company}
        </p>
        <p>
          {user?.location}
        </p>
        <p>
          {user?.email}
        </p>
    </>
  )
}

export default UserProfile