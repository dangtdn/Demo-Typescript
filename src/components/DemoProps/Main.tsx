import React from 'react'
import Heading from './Heading';
import ListPerson from './ListPerson';
import Oscar from './Oscar';
import Person from './Person';
import Status from './Status';

type Props = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    styles: React.CSSProperties
}

const Main = (props: Props) => {
    const { show, styles } = props;
    const user = {
        name: "John",
        age: 20,
        email: "johnzz@gmail.com"
    }

    const listUser = [
        {
            name: "Lisa",
            age: 30,
            email: "jaLisa@gmail.com"
        },
        {
            name: "Jazz",
            age: 18,
            email: "jjjzz@gmail.com"
        },
    ]

  return (
    <div>
        <Heading>Show list person (Use props.children in component)</Heading>

        <Oscar>
            <Heading>Notes: click show to load list user (Use props.children: React.ReactNode in component)</Heading>
        </Oscar>

        {/* Not user in Person */}
        <Person/> 

        {/* User in Person */}
        <Person user={user}/> 

        <button style={styles} type="button" onClick={() => props.setShow(!show)}>Show more</button>

        <Status status={'loading'}/>

        {show ? <ListPerson listUser={listUser}/> : <p>Nothing</p>}
        <br />
        <h3>Type props event button in function handleClick</h3>
        <button type="button" onClick={(evt) => props.handleClick(evt, 1)}>Test click</button>
    </div>
  )
}

export default Main