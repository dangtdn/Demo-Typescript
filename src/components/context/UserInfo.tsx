import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

type Props = {}

const UserInfo = (props: Props) => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'John Son',
                email: 'john@gmail.com'
            })
        }
    }

    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

  return (
    <div>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleLogout}>Log out</button>
        <p>User name: {userContext?.user?.name}</p>
        <p>User email: {userContext?.user?.email}</p>
    </div>
  )
}

export default UserInfo