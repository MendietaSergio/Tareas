import React from 'react';
import { Button } from './Button';

export const Form = ({ handleSubmit, handleInputChange, descripcion }) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="descripcion"
                pladeholder="Aprender qué...."
                autoComplete="off"
                className="from-control"
                onChange={handleInputChange}
                value={descripcion}
            />
            <Button
                className=" btn btn-primary w-100 mt-2"
                text="Agregar"
            />
        </form>
    </div>;
};
