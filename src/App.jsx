import React from 'react'
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import DisplayCooperResult from './components/DisplayCooperResult';
import SaveCooperResult from './components/SaveCooperResult';

const App = () => {
  return (
    <>
      <LoginForm />
      <InputForm />
      <DisplayCooperResult />
      <SaveCooperResult />
    </>
  )
}

export default App