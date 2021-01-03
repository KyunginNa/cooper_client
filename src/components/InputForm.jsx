import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from 'semantic-ui-react'

const InputForm = () => {
  const dispatch = useDispatch()
  const saveCooperInputs = e => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_INPUTS',
      payload: {
        distance: e.target.distance.value,
        gender: e.target.gender.value,
        age: e.target.age.value,
      }
    })
  }

  return (
    <>
      <Form onSubmit={saveCooperInputs}>
        <Form.Group>
          <Form.Field width="3">
            <label>Distance</label>
            <input
              type="text"
              name="distance"
              data-cy="input-distance"
              onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
            />
          </Form.Field>
          <Form.Field width="3">
            <label>Gender</label>
            <select
              name="gender"
              data-cy="input-gender"
              onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </Form.Field>
          <Form.Field width="3">
            <label>Age</label>
            <input
              type="text"
              name="age"
              data-cy="input-age"
              onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Button
            type="submit"
            data-cy="btn-result"
          >See A Result
            </Button>
        </Form.Field>
      </Form>
    </>
  )
}

export default InputForm
