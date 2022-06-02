import React, { createContext, useState } from 'react'

export  type InfoUser = {
    name: string,
    email: string
}

type UserContextType = {
  user: InfoUser | null,
  setUser: React.Dispatch<React.SetStateAction<InfoUser | null>>
}

type Props = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = (props: Props) => {
  const { children } = props;
  const [user, setUser] = useState<InfoUser | null>(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider