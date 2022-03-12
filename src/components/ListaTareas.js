import React from "react";
import { ItemLista } from "./ItemLista";

export const ListaTareas = ({
  tareas,
  handleDelete,
  handleComplete,
  changeColor,
}) => {
  return (
    <>
      {tareas.map((tareas, i) => (
        <ItemLista key={i}
          changeColor={changeColor}
          tareas={tareas}
          i={i}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </>

  );
};
