import { useEffect, useState } from "react"

export const BandList = ({data,votar,borrar}) => {
    
    const [bands, setBands] = useState(data);

    const cambioNombre = (event,id) => {
        const nuevoNombre = event.target.value;
        setBands(bands => bands.map(band => {
            if(band.id === id){
                band.name = nuevoNombre
            }
            return band;
        }))
        
    }

    useEffect(() => {
        setBands(data)
    },[data])

    const onPerdioFoco = (id,nombre) => {
        console.log(id,nombre)
    }

    const crearRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button 
                        onClick={() => votar(band.id)}
                        className="btn btn-primary"> + 1</button>
                    </td>
                    <td>
                        <input className="form-control" value={band.name} 
                            onChange={(event) => cambioNombre(event,band.id)} 
                            onBlur={() =>onPerdioFoco(band.id,band.name)}/>
                    </td>
                    <td>
                        <h3>{band.votes}</h3>
                    </td>
                    <td>
                        <button 
                            onClick={() => borrar(band.id)}
                            className="btn btn-danger">
                            Borrar
                        </button>
                    </td>
                </tr>

            ))
            
        )
    }

    return (
    <>
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Votos</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {crearRows()}
            </tbody>
        </table>
    </>
  )
}
