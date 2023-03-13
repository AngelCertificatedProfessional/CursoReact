import { useFetch,useCounter } from "../hooks"
import { LoadingQuote,Quote } from "../03-examples";

export const Layout = () => {

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
        (isLoading) 
        ? <LoadingQuote/>
        : <Quote name={name}/>
      }

      <button className='btn btn-primary' onClick={() => increment()} disabled={isLoading}>
        Next quote
      </button>

    </>
  )
}
