import { BrowserRouter,Routes,Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import {theme} from './ui/Theme'
import { Header } from "./ui/Header"
import {Footer} from "../components/ui/Footer"

export const App = () =>  {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route path= "/" element={<JournalPage/>} /> */}
          
          <Route path= "/" Component={() => <div style={{height:"2000px"}}>Home</div>} />
          <Route path= "/services" Component={() => <div>Services</div>} />
          <Route path= "/customsoftware" Component={() => <div>Custom Software</div>} />
          <Route path= "/mobileapps" Component={() => <div>Mobile Apps</div>} />
          <Route path= "/websites" Component={() => <div>Websites</div>} />
          <Route path= "/revolution" Component={() => <div>Revolution</div>} />
          <Route path= "/about" Component={() => <div>About</div>} />
          <Route path= "/contact" Component={() => <div>Contact</div>} />
          <Route path= "/estimate" Component={() => <div>Estimate</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}