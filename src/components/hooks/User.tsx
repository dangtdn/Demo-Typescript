import React, { useState } from 'react'

type Props = {}

type UserState = {
    name: string,
    email: string,
}

const User = (props: Props) => {
    const [user, setUser] = useState<UserState | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'John Son',
            email: 'john@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleLogout}>Log out</button>
        <p>User name: {user?.name}</p>
        <p>User email: {user?.email}</p>
    </div>
  )
}

export default User