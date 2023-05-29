import { Header } from "./ui/Header"
import { ThemeProvider } from '@mui/material/styles'
import {theme} from './ui/Theme'
export const App = () =>  {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hola!
    </ThemeProvider>
  )
}