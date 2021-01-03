import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cooperCalculator from "../modules/cooperCalculator";
import axios from "axios";
import { Message, Icon } from 'semantic-ui-react'

const DisplayCooperResult = () => {
  const dispatch = useDispatch()

  const userInput = useSelector(state => state.input)
  const authenticated = useSelector(state => state.authenticated)
  const resultSaved = useSelector(state => state.resultSaved)
  const credentials = useSelector(state => state.credentials)

  let cooperResult = cooperCalculator(userInput.distance, userInput.gender, userInput.age)
  const saveResult = async () => {
    const headers = {
      ...credentials,
      "Content-type": "application/json",
      Accept: "application/json"
    }
    debugger
    try {
      await axios.post("/performance_data",
        {
          performance_data: { data: { age: userInput.age, distance: userInput.distance, result: cooperResult } }
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
      {userInput.submitted &&
        <>
          <div>
            <Message
              attached
              data-cy="cooper-result-message"
              header={`Result: ${cooperResult}`}
              content={`${userInput.age} years old ${userInput.gender} running ${userInput.distance} meters.`}
            />
            {!authenticated &&
              <Message attached='bottom' warning>
                <Icon name='lock open' />
                Login to save the result.
              </Message>
            }
          </div>
          {userInput.submitted &&
            authenticated &&
            !resultSaved &&
            <button
              data-cy="btn-save"
              onClick={saveResult}
            >Save
        </button>
          }
          {resultSaved &&
            <Message
              data-cy="save-message"
              icon="save"
              header="Your result was saved!"
              list={[
                `Age: ${userInput.age}`,
                `Distance: ${userInput.gender}`,
                `Result: ${cooperResult}`
              ]}
              color="teal"
            />
          }
        </>
      }
    </>
  )
}

export default DisplayCooperResult

