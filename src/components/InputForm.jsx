import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Segment, Header, Icon } from 'semantic-ui-react'

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
    <div style={{ marginTop: "1em" }}>
      <Segment attached="top" inverted color='teal'>
        <Header as='h2'>
          <Icon name='stopwatch' />
          <Header.Content>Check Your Cooper Test Result</Header.Content>
        </Header>
      </Segment>
      <Segment attached="bottom" color="teal">
        <Form onSubmit={saveCooperInputs}>
          <Form.Group>
            <Form.Field width="6">
              <label>Distance</label>
              <input
                type="text"
                name="distance"
                data-cy="input-distance"
                onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
              />
            </Form.Field>
            <Form.Field width="6">
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
            <Form.Field width="6">
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
              color="teal"
            >See Result
            </Button>
          </Form.Field>
        </Form>
      </Segment>
    </div>
  )
}

export default InputForm
