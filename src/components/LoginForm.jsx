import React from 'react'
import { authenticate } from "../modules/authenticate";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authenticateUser = async (e) => {
    e.preventDefault()
    let response = await authenticate(e.target.email.value, e.target.password.value)
    debugger
    if (response === false) {
      dispatch({ type: "LOGIN_FAILED" });
    } else {
      dispatch({ type: "SET_AUTH_CREDENTIALS", payload: response });
    }
  }
  return (
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
    </form>
  )
}

export default LoginForm
