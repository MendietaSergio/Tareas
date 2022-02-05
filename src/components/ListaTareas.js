import React from "react";
import {ItemLista} from './ItemLista'

export const ListaTareas = ({ tareas, handleDelete, handleComplete }) => {
  return (
    <div>
      {console.log("lista tareas")}
      {tareas.map((tareas, i) => (
        
        <ItemLista
          tareas={tareas}
          i={i}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};
