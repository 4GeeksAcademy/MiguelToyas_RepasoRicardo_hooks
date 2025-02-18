import React, { useEffect, useState } from "react";
import ManagingInputs from "./ManagingInputs";

//create your first component
const Home = () => {
  // Sintaxis para declarar useState:
  const [nombre, setNombre] = useState("Ricardo");

  // Primer estado de vida: Renderizando
  useEffect(() => {
    console.log("Se está renderizando el componente");
  });

  // Segundo estado de vida: Se ha montado el componente
  useEffect(() => {
    console.log("Se ha montado el componente");
  }, []);

  // Tercer estado de vida: Renderizado condicional
  useEffect(() => {
    console.log("Se ha pulsado el botón y nombre ha cambiado");
  }, [nombre]);

  // Cuarto estado de vida (Muerte): Se desmonta el componente
  useEffect(() => {
    return () => {
      console.log("Se ha desmontado el componente");
    };
  }, []);

  return (
    <div className="text-center">
      <h1>Repaso de Hooks en React</h1>
      <div>
        <h2>Repaso useEffect:</h2>
        <p>Mi nombre es {nombre}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setNombre("Miguel");
          }}
        >
          Cambiar el nombre a Miguel
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setNombre("Daniel");
          }}
        >
          Cambiar el nombre a Daniel
        </button>
      </div>

      <div className="mt-5 container border">
        <ManagingInputs />
      </div>
    </div>
  );
};

export default Home;
