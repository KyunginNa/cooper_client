import React from 'react'
import LoginForm from './components/LoginForm';
import InputForm from './components/InputForm';
import DisplayCooperResult from './components/DisplayCooperResult';
import DisplayPastResults from './components/DisplayPastResults'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Container style={{ marginTop: "1em" }}>
      <LoginForm />
      <InputForm />
      <DisplayCooperResult />
      <DisplayPastResults />
    </Container>
  )
}

export default App