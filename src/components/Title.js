import React from 'react'

export const Title = ({title,subTitle}) => {
    return (
        <div>
            <h1 className='text-left'>{title}</h1>
            <div className='text-center text-uppercase my-3'>
            <span>{subTitle}</span>
            </div>
        </div>
    )
}
