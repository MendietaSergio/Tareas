import React, { useEffect, useReducer } from "react";
import useForm from "./hooks/useForm";
import { tareasReducer } from "./reducers/tareasReducer";

// const initalState = [
//   {
//     id: new Date().getTime(),
//     descripcion: "Aprender React",
//     terminado: false,
//   },
// ];
const init = () => {
  // return  [
  //   {
  //     id: new Date().getTime(),
  //     descripcion: "Aprender React",
  //     terminado: false,
  //   },
  // ];
  return JSON.parse(localStorage.getItem("tareas")) || [];
};
function App() {
  //dispatch= funcion que dispara las funciones
  const [tareas, dispatch] = useReducer(tareasReducer, [], init);

  //envío el estado inicial, como vacio
  const [{ descripcion }, handleInputChange, reset] = useForm({
    descripcion: "",
  });

  //me guarda las tareas en el localstorage, cada vez que tareas cambia
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]); //cuando cambia se ejecuta

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim().length < 1) {
      return;
    }

    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion,
      completada: false,
    };

    const agregarTarea = {
      type: "agregar",
      payload: nuevaTarea,
    };
    dispatch(agregarTarea); //disparo la tarea a agregar
    reset();
  };
  const handleDelete = (id) => {
    const borrarTarea = {
      type: "borrar",
      payload: id,
    };
    dispatch(borrarTarea);
  };
  return (
    <div className="App">
      <h1>Tareas APP</h1>
      <hr />
      <h4>Total tareas: {tareas.length}</h4>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-grop list-group-flush px-4">
            {tareas.map(({ descripcion, terminado, id }, i) => (
              <li
                key={descripcion + i}
                className="d-flex justify-content-between align-items-center"
              >
                <p>
                  {i + 1}. {descripcion}
                </p>
                <button
                  onClick={() => handleDelete(id)}
                  className="btn btn-sm btn-danger mb-1"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
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
            <button type="submit" className=" btn btn-primary w-100 mt-2">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
