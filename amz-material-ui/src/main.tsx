import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
