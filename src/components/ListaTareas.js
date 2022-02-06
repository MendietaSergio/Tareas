import React from "react";
import { ItemLista } from "./ItemLista";

export const ListaTareas = ({
  tareas,
  handleDelete,
  handleComplete,
  changeColor,
}) => {
  return (
    <div>
      {tareas.map((tareas, i) => (
        <ItemLista
          changeColor={changeColor}
          tareas={tareas}
          i={i}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};
