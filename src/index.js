import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import configureStore from './state/store/configureStore'
import { Provider } from 'react-redux'
import axios from 'axios'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

const store = configureStore()
let apiUrl
if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://ak-cooper-api.herokuapp.com/api'
} else {
  apiUrl = 'http://localhost:3000/api'
}
axios.defaults.baseURL = apiUrl

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
