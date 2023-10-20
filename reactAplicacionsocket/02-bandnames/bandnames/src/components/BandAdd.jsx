import { useState } from "react";

export const BandAdd = ({crearBanda}) => {
  
  const [valor,setValor] = useState('')

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(valor)
    if(valor.trim().length> 0){
      setValor('')
    }
    crearBanda(valor)
  }
  
  return (
    <>
        <h3>Agregar Banda</h3>
        <form onSubmit={onSubmit}>
            <input
                className="form-control"
                placeholder="Nuevo nombre de banda"
                value={valor}
                onChange={(ev) => setValor(ev.target.value)}
            />
        </form>
    </>
  )
}
