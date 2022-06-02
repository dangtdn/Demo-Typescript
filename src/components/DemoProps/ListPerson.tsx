import React from 'react'
import Person from './Person'
import { InfoUser } from './Person.types'

type Props = {
    listUser: InfoUser[]
}

const ListPerson = (props: Props) => {
    const { listUser } = props;

  return (
    <div>
        {listUser.map((item, index) => {
            return (
                <Person key={index} user={item}/>
            )
        })}
    </div>
  )
}

export default ListPerson