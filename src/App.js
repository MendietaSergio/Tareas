import React, { useEffect, useReducer, useState } from "react";
import { Form } from "./components/Form";
import { ListaTareas } from "./components/ListaTareas";
import { Title } from "./components/Title";
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

  const [btnAgregar, setBtnAgregar] = useState(false);
  useEffect(() => {
    console.log("cambio el estado de btnAgregar ", btnAgregar);
  }, [btnAgregar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion.trim().length < 1) {
      return;
    }

    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion,
      terminado: false,
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
  const handleComplete = (id) => {
    const cambiarEstado = {
      type: "estado",
      payload: id,
    };
    dispatch(cambiarEstado);
  };

  const btnAdd = () => {
    console.log(btnAgregar);
    btnAgregar = !btnAgregar;
    console.log(btnAgregar);
  };

  return (
    <div className="App">
      <h1 className="text-center">Tus tareas</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h4 className="mx-5">Total tareas: {tareas.length}</h4>
        </div>
        {tareas.length != 0 ? (
          <>
            <div className="col-6">
              {btnAgregar ? null : (
                <div className="d-flex justify-content-end">
                  <div
                    onClick={() => setBtnAgregar(!btnAgregar)}
                    className="btn btn-success"
                  >
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
      <hr />
      {/* termina subtitulo */}
      <div className="row">
        {tareas.length != 0 ? (
          <div className={btnAgregar ? "col-7" : "col-12"}>
            <ul className="list-grop list-group-flush px-4">
              <ListaTareas
                tareas={tareas}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            </ul>
          </div>
        ) : (
          
            <div className="row h-100 align-items-center justify-content-center">
              <div className={tareas.length === 0 ? "col-auto bg-light" : null}>
                <Title
                title="No hay tareas"
                subTitle="¡ Crea una nueva !"
                />
                <Form
                  handleSubmit={handleSubmit}
                  handleInputChange={handleInputChange}
                  descripcion={descripcion}
                />
              </div>
            </div>
          
        )}
        <div div className={btnAgregar ? "col-5" : null}>
          {btnAgregar ? (
            <div>
              <div className="d-flex justify-content-end">
                <div
                  onClick={() => setBtnAgregar(!btnAgregar)}
                  className="btn btn-danger my-2"
                >
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <Form
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                descripcion={descripcion}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
