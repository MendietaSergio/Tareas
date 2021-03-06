export const tareasReducer = (state = [], action, btnAdd) => {
  switch (action?.type) {
    case "btnAdd":
      console.log("btnAdd");
      return !btnAdd;
    case "agregar":
      //AGREGAR ELEMENTOS AL ARRAY
      return [...state, action.payload]; //+ elemento agregado
    case "borrar":
      return state.filter((tarea) => tarea.id !== action.payload); //- elemento eliminado
    case "estado":
      return state.map((tarea) =>
        tarea.id === action.payload
          ? { ...tarea, terminado: !tarea.terminado }
          : tarea
      );

    default:
      return state;
  }
};
