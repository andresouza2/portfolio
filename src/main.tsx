import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyle } from './style/globalStyles'
import dark from './style/themes/dark'
import light from './style/themes/light'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark ? dark : light}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
