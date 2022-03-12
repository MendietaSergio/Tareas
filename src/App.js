import React, { useEffect, useReducer, useState } from "react";
import { Form } from "./components/Form";
import { HighLighters } from "./components/HighLighters";
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
  }, [btnAgregar]);

  const [changeColor, setChangeColor] = useState("color");

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

  return (
    <div className="App">
      <div className="row mx-5">
        <div className="col-6 d-flex ">
          <div className="col-12">
            <Title className="text-center" title="Tus Tareas" />
          </div>
          <HighLighters
            setChangeColor={setChangeColor}
            changeColor={changeColor}
          />
        </div>
      </div>
      {tareas.length === 0 ? null : (
        <>
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
        </>
      )}
      {/* termina subtitulo */}
      <div className="row">
        {tareas.length != 0 ? (
          <div
            className={
              btnAgregar
                ? "col-7"
                : "row h-100 align-items-center justify-content-center"
            }
          >
            <div className={btnAgregar ? null : "col-6 bg-light"}>
              <ul className="list-grop list-group-flush px-4">
                <ListaTareas
                  tareas={tareas}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                  changeColor={changeColor}
                />
              </ul>
            </div>
          </div>
        ) : (
          <div className="row h-100 align-items-center justify-content-center">
            <div className={tareas.length === 0 ? "col-6 bg-light" : null}>
              <Title
                title="¡ Crea una tarea !"
                typeTitle="subTitulo"
                className="font-weight-bold  text-center my-3"
              />
              <Form
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                descripcion={descripcion}
              />
            </div>
          </div>
        )}
        {tareas.length != 0 ? (

        <div className={btnAgregar ? "col-5" : null}>
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
        ) : (null)}

      </div>
    </div>
  );
}

export default App;
