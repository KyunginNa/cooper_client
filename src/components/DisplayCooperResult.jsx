import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cooperCalculator from "../modules/cooperCalculator";
import axios from "axios";
import { Message, Icon, Button, Segment } from 'semantic-ui-react'

const DisplayCooperResult = () => {
  const dispatch = useDispatch()

  const { input, authenticated, resultSaved, credentials } = useSelector(state => state)

  let cooperResult = cooperCalculator(input.distance, input.gender, input.age)
  const saveResult = async () => {
    const headers = {
      ...credentials,
      "Content-type": "application/json",
      Accept: "application/json"
    }
    try {
      await axios.post("/performance_data",
        {
          performance_data: { data: { age: input.age, distance: input.distance, result: cooperResult } }
        }, {
        headers: headers
      }
      )
      dispatch({ type: 'SAVE_RESULT' })
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }
  }

  return (
    <>
      {input.submitted &&
        <Segment>
          <Message
            attached
            data-cy="cooper-result-message"
            header={`Result: ${cooperResult}`}
            content={`${input.age} years old ${input.gender} running ${input.distance} meters.`}
          />
          {!authenticated &&
            <Message attached='bottom' warning>
              <Icon name='lock open' />
                Login to save the result.
              </Message>
          }
          {input.submitted &&
            authenticated &&
            !resultSaved &&
            <Button
              data-cy="btn-save"
              onClick={saveResult}
              style={{ marginTop: "1em" }}
              color="teal"
            >Save
            </Button>
          }
          {resultSaved &&
            <Message
              data-cy="save-message"
              icon="save"
              header="Your result was saved!"
              list={[
                `Age: ${input.age}`,
                `Distance: ${input.gender}`,
                `Result: ${cooperResult}`
              ]}
              color="teal"
            />
          }
        </Segment>
      }
    </>
  )
}

export default DisplayCooperResult

