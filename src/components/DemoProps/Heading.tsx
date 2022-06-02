import React from 'react'

type Props = {
    children: string
}

const Heading = (props: Props) => {
    const { children } = props;

  return (
    <div>{children}</div>
  )
}

export default Heading