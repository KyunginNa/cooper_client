import React from 'react'
import {  Form } from 'semantic-ui-react'

const InputFields = ({ onChangeHandler }) => {
  const options = [
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'm', text: 'Male', value: 'male'}
  ]
  return (
    <>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Distance'
            placeholder='Distance'
            onChange={onChangeHandler}
            id="distance"
            name="distance" />
          <Form.Select
            fluid
            label='Gender'
            placeholder='Gender'
            options={options}
            onChange={onChangeHandler}
            name="gender"
            id="gender" />
          <Form.Input
            fluid
            label='Age'
            placeholder='Age'
            onChange={onChangeHandler}
            name="age"
            id="age" />
        </Form.Group>
      </Form>
    </>
  )
}

export default InputFields