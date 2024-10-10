import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from "./redux/store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <div className="font-BeViet">
          <App />
        </div>
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
