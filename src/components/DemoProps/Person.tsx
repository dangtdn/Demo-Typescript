import React from 'react'
import { PersonProps } from './Person.types';

const Person = (props: PersonProps) => {
    const { user = {name: 'no name', age: 0, email: 'none'} } = props;
  return (
    <div>
        name: {user.name} - age: {user.age} - email: {user.email}
    </div>
  )
}

export default Person