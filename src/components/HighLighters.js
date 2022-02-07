import React, { useState } from "react";
import { highLighters } from "../mock/highlighters";
import iconHighLighters from "../img/icon_highlighters.png";

export const HighLighters = ({setChangeColor, changeColor}) => {
  const [showHighLighters, setShowHighLighters] = useState(false);

  const handleSelect =(color) =>{
    setChangeColor(color)
    setShowHighLighters(!showHighLighters)
  }
  return (
    <>
      <div className="col-6 d-flex justify-content-end mb-5">
        <img
          src={iconHighLighters}
          title="Paleta de colores"
          className="iconhighlighters"
          onClick={() => setShowHighLighters(!showHighLighters)}
        />
      </div>
      {showHighLighters ? (
        <>
          <div className="row">
            <div className={showHighLighters&&`animate__animated animate__fadeInRight container_colores d-flex justify-content-end`}>
              {highLighters.map((highLighter) => (
                <div key={highLighter.id} className={`background${highLighter.id}`}>
                  <img
                    src={highLighter.img}
                    title={"Resaltador"}
                    className="logos_highLighter"
                    onClick={() => handleSelect(highLighter.color)}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
