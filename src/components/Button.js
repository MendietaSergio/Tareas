import React from 'react';

export const Button = ({
    type = "submit",
    className,
    text
}) => {
    return <div>
        <button type={type} className={className}>{text}
        </button>
    </div>;
};
