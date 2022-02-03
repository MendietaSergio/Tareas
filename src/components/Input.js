import React from 'react';

export const Input = ({
    name,
    className,
    autoComplete,
    placerholder,
    onChange=null,
    value="",
    type = "text"}) => {

    return <div>
        <input
            onChange={onChange}
            value={value}
            type={type}
            name={name}
            pladeholder={placerholder}
            autoComplete={autoComplete}
            className={className}
        />
    </div>;
};
