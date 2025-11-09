import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Experience from './Experience.jsx'
import Achievements from './Achievements.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Experience></Experience>
    <Achievements></Achievements>
    <Contact></Contact>
    <Footer></Footer>
  </StrictMode>
)
