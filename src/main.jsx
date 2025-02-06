import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GatoGame from './GatoGame'
import './GatoGame.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GatoGame />
  </StrictMode>,
)
