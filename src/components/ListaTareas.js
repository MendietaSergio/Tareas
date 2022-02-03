import React from 'react';

export const ListaTareas = ({tareas,handleDelete}) => {
  return <div>
       {tareas.map(({ descripcion, terminado, id }, i) => (
              <li
                key={descripcion + i}
                className="d-flex justify-content-between align-items-center"
              >
                <p>
                  {i + 1}.<span className={terminado&&'text-decoration-line-through'}>
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
            ))}
  </div>;
};
