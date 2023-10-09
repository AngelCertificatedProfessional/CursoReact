import { BrowserRouter,Routes,Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import {theme} from './ui/Theme'
import { Header } from "./ui/Header"
import {Footer} from "./ui/Footer"
import { LandingPage } from "./LandingPage"
import { useState } from "react"
import {Services} from "./Services"
import { CustomSoftware } from "./CustomSoftware"
import { MobileApps } from "./MobileApps"
import { Websites } from "./Websites"

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
          <Route path= "/services" element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path= "/customsoftware" element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path= "/mobileapps" element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route path= "/websites" element={<Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
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