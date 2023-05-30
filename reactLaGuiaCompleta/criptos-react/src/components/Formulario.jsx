import styled from '@emotion/styled'
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import { useEffect, useState } from 'react';
import { Error } from './Error';
const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    width:100%;
    padding:10px;
    color:#FFF;
    font-width:700;
    text-transform:uppercase;
    font-size:20px;
    border-radius:5px;
    transition:background-color .3s ease;
    margin-top:30px;
    &:hover {
        background-color:#7A7DFE;
        cursor:pointer;
    }
`

export const Formulario = ({setMonedas}) => {

  const [criptos,setCriptos] = useState([])
  const [error,setError] = useState(false)
  const [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);
  const [criptoMoneda,SelectCriptoMoneda] = useSelectMonedas('Elige tu CryptoMoneda',criptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map( crypto => (
        {
          id:crypto.CoinInfo.Name,
          nombre:crypto.CoinInfo.FullName
        }
      ))
      setCriptos(arrayCriptos)
    }
    consultarAPI();
  },[])

  const handleSubmit = e => {
    e.preventDefault();
    if([moneda,criptoMoneda].includes('')){
      setError(true)
      return 
    }
    setError(false)
    setMonedas({
      moneda,
      criptoMoneda
    })
  }

  return (
    <>
      
      {error && <Error> Tdos los campos son obligatorios</Error>}

      <form onSubmit={handleSubmit}>  
          <SelectMonedas />
          <SelectCriptoMoneda />
          {moneda}
          <InputSubmit type="submit" value="Cotizar"/>
      </form>
    </>

  )
}
