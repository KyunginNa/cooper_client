import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cooperCalculator from "../modules/cooperCalculator";

const DisplayCooperResult = () => {
  const dispatch = useDispatch()

  const userInput = useSelector(state => state.input)
  const authenticated = useSelector(state => state.authenticated)
  const resultSaved = useSelector(state => state.resultSaved)

  let cooperResult = cooperCalculator(userInput.distance, userInput.gender, userInput.age)
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
          onClick={() => dispatch({ type: 'SAVE_RESULT' })}
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

