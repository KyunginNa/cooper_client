import React from 'react';
import {  Form, Input, Button } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Form onSubmit={submitFormHandler} id="login-form">
      <Form.Group widths='equal'>
        <Form.Field
          fluid
          id='email'
          name='email'
          control={Input}
          label='Email'
          placeholder='user@mail.com'
          error={{
            content: 'Please enter a valid email address',
            pointing: 'above',
          }}
        />
        <Form.Input
          fluid
          label='Password'
          placeholder='Password'
          name="password"
          id="password" />
        <Form.Field
          id='submit'
          control={Button}
          content='Submit'
          label='Submit'
        />
      </Form.Group>
    </Form>
  );
};

export default LoginForm
