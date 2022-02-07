import React from 'react';
import { Button } from './Button';

export const Form = ({ handleSubmit, handleInputChange, descripcion }) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <input
                    id="label-tarea"
                    type="text"
                    name="descripcion"
                    placeholder="Aprender qué...."
                    autoComplete="off"
                    className="form-control"
                    onChange={handleInputChange}
                    value={descripcion}
                />
            </div>
            <Button
                className=" btn btn-primary w-100 mt-2 mb-4"
                text="Agregar"
            />
        </form>
    </div>;
};
