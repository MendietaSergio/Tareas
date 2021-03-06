import React from 'react'

export const Title = ({title, className}) => {
    return (
        <div>
            <h1 className={className}>{title}</h1>
        </div>
    )
}
