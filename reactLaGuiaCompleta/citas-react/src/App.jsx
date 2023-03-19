import { Header } from "./components/Header"
import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"

export const App = () => {
  return (
    <>
      <Header />
      <Formulario/>
      <ListadoPacientes/>
    </>
  )
}