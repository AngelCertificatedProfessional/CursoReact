import React from 'react'


export const Small = React.memo(({value}) => {

    console.log('Me volvi a redibujar :(')

    return (
        <small>
            {value}
        </small>
    )
})