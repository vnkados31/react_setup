import ReactDOM from 'react-dom/client'
import store from './app/store.js'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'

const root =  ReactDOM.createRoot(document.getElementById('root'))

root.render(
  
  <Provider store={store}>
       <App/>
  </Provider>

)
