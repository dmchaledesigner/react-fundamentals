import React, { useState, useEffect } from 'react'

const Name = () => {

    const [name, setName] = useState('David')

    useEffect(() => {
        console.log('name has been changed')
        console.log(name);
    }, [name])


    return (
        <>
            <p>{name}</p>
            <button
                onClick={() => setName('Kevin')}
            >CLick Me</button>
        </>
    )
}

export default Name
