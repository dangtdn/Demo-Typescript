import React from 'react'

type Props = {
    children: React.ReactNode
}

const Oscar = (props: Props) => {
    const { children } = props;

  return (
    <div>{children}</div>
  )
}

export default Oscar