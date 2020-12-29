import React from 'react'
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import DisplayCooperResult from './components/DisplayCooperResult';

const App = () => {
  const authenticated = useSelector(state => state.authenticated)
  const credentials = useSelector(state => state.credentials)
  return (
    <>
      <LoginForm />
      <p data-cy="login-message">
        {authenticated ?
          `Hello, ${credentials.uid}!`
          :
          "Invalid credentials. Please confirm your email and password."
        }
      </p>
      <InputForm />
      <DisplayCooperResult />
    </>
  )
}

export default App
