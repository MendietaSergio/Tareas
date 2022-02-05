import React from 'react'

export const ItemLista = ({ tareas:{descripcion, terminado, id}, i, handleDelete, handleComplete }) => {
    return (
        <li
        key={descripcion + i}
        className="d-flex justify-content-between align-items-center"
        >
          <p onClick={() => handleComplete(id)}>
            {i + 1}.{" "} 
            <span className={terminado ? "color text-decoration-line-through" : ""}>
              {descripcion}
            </span>
          </p>
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-sm btn-danger mb-1"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
    )
}