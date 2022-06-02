import React, { useEffect, useState } from 'react'

type Props = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: Props) => {
    const { status } = props;
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (status === 'loading') {
            setMessage('Loading...')
        } else if (status === 'success') {
            setMessage('Data fetched successfully')
        } else if (status === 'error') {
            setMessage('Error fetching data')
        }
    }, [status]);

  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status