import React, { useState } from 'react'
import { authenticate } from "../modules/authenticate";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, Message } from 'semantic-ui-react'

const LoginForm = () => {
  const dispatch = useDispatch();
  const { authenticated, credentials, renderLoginForm } = useSelector(state => state)

  const [open, setOpen] = useState(false)

  const authenticateUser = async (e) => {
    e.preventDefault()
    let response = await authenticate(e.target.email.value, e.target.password.value)
    if (response === false) {
      dispatch({ type: "LOGIN_FAILED" });
    } else {
      dispatch({ type: "SET_AUTH_CREDENTIALS", payload: response });
      setOpen(false)
    }
  }
  return (
    <>
      {renderLoginForm &&
        <Modal
          closeIcon
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button data-cy="btn-login" basic color='teal'>Login</Button>}
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <Form onSubmit={authenticateUser}>
              <Form.Input
                label="Email"
                type="email"
                name="email"
                data-cy="input-email"
              />
              <Form.Input
                label="Password"
                type="password"
                name="password"
                data-cy="input-password"
              />
              <Form.Button
                type="submit"
                data-cy="btn-login-submit"
              >Login
              </Form.Button>
            </Form >
          </Modal.Content>
          <Modal.Description>
            {authenticated === false &&
              <p data-cy="login-message">Invalid credentials. Please confirm your email and password.</p>}
          </Modal.Description>
        </Modal>
      }
      { authenticated &&
        <Message
          data-cy="login-message"
          positive
        >Hello, {credentials.uid}!
        </Message>
      }
    </>
  )
}

export default LoginForm
