import React from 'react'

type Props = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Props) => {
    const { value } = props;
  return (
    <div>
        <h3>Type props event input in function handleChange</h3>
        <input type="text" onChange={props.handleChange}/>
        <p>Text: {value}</p>
    </div>
  )
}

export default Input