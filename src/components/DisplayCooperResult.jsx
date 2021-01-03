import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cooperCalculator from "../modules/cooperCalculator";
import axios from "axios";

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
      {userInput.submitted && (
        <>
          <p data-cy="cooper-message">
            {userInput.age} years old {userInput.gender} running {userInput.distance} meters.
          </p>
          <p data-cy="cooper-result">
            Result: {cooperResult}
          </p>
        </>
      )}
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
        <p data-cy="save-message">Your result was saved.</p>
      }
    </>
  )
}

export default DisplayCooperResult

