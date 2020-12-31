import React from 'react'
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import DisplayCooperResult from './components/DisplayCooperResult';
import DisplayPastResults from './components/DisplayPastResults'

const App = () => {
  return (
    <>
      <LoginForm />
      <InputForm />
      <DisplayCooperResult />
      <DisplayPastResults />
    </>
  )
}

export default App