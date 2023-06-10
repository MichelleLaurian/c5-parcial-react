import { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: "",
    band: "",
    hobby: "",

  });
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setDatos((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  let regex = /^\s/
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      (datos.nombre).length > 3
      && !(regex.test(datos.nombre))
      && (datos.band).length > 6
    ) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return <>
    <div className="formulario-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="formulario-card-input"
          placeholder="Ingresa tu nombre"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          disabled={show} />
        <input
          type="text"
          className="formulario-card-input"
          placeholder="¿Cuál es tu banda de música favorita?"
          name="band"
          value={datos.band}
          onChange={handleChange}
          disabled={show} />
        <input
          type="text"
          className="formulario-card-input"
          placeholder="¿Cuál es tu hobby?"
          name="hobby"
          value={datos.hobby}
          onChange={handleChange}
          disabled={show} />
        <button
          type="submit">
          Enviar
        </button>
        {/* {error && "Por favor chequea que la información sea correcta."} */}
      </form>
      {show
        ? <Card datos={datos} />
        : error && <p className="erro-datos">Por favor chequea que la información sea correcta.</p>
      }
    </div>
  </>;
}

export default Formulario;
