import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"

export const MultipleCustomHooks = () => {

  const {counter,increment} = useCounter(1)

  const {data,isLoading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  //si el valor no es nullo o vacio tomara el valor
  const {name} = !!data && data;

  console.log('respuesta',data,isLoading,hasError)

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>
      
      {
        (isLoading) ? (
          <div className="alert alert-info text-center">
            Cargando...
          </div>
        ):
        (
          <blockquote className="blockquote text-end">
            <p className="mb-1">
              {name}
            </p>
            <footer className="blockquote-footer">
              {name}
            </footer>
          </blockquote>
        )
      }

      <button className='btn btn-primary' onClick={() => increment()} disabled={isLoading}>
        Next quote
      </button>

    </>
  )
}
