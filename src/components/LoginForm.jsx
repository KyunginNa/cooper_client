import React from 'react'
import { authenticate } from "../modules/authenticate";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authenticated)
  const credentials = useSelector(state => state.credentials)
  const renderLoginForm = useSelector(state => state.renderLoginForm)

  const authenticateUser = async (e) => {
    e.preventDefault()
    let response = await authenticate(e.target.email.value, e.target.password.value)
    if (response === false) {
      dispatch({ type: "LOGIN_FAILED" });
    } else {
      dispatch({ type: "SET_AUTH_CREDENTIALS", payload: response });
    }
  }
  return (
    <>
      {renderLoginForm &&
        <form onSubmit={authenticateUser}>
          <input
            type="email"
            name="email"
            data-cy="input-email"
          />
          <input
            type="password"
            name="password"
            data-cy="input-password"
          />
          <input
            type="submit"
            value="Login"
            data-cy="btn-login"
          />
        </form >
      }

      <p data-cy="login-message">
        {authenticated === false ?
          "Invalid credentials. Please confirm your email and password."
          :
          (authenticated === true ?
            `Hello, ${credentials.uid}!`
            :
            ""
          )
        }
      </p>
    </>
  )
}

export default LoginForm
