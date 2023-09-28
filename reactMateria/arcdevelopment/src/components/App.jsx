import { BrowserRouter,Routes,Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import {theme} from './ui/Theme'
import { Header } from "./ui/Header"
import {Footer} from "../components/ui/Footer"
import { LandingPage } from "./LandingPage"
import { useState } from "react"

export const App = () =>  {
  const [selectedIndex,setSelectedIndex] = useState(0);
  const [value,setValue] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value = {value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Routes>
          {/* <Route path= "/" element={<JournalPage/>} /> */}
          
          <Route path= "/" element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path= "/services" Component={() => <div>Services</div>} />
          <Route path= "/customsoftware" Component={() => <div>Custom Software</div>} />
          <Route path= "/mobileapps" Component={() => <div>Mobile Apps</div>} />
          <Route path= "/websites" Component={() => <div>Websites</div>} />
          <Route path= "/revolution" Component={() => <div>Revolution</div>} />
          <Route path= "/about" Component={() => <div>About</div>} />
          <Route path= "/contact" Component={() => <div>Contact</div>} />
          <Route path= "/estimate" Component={() => <div>Estimate</div>} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}