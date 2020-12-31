import React from "react";
import { useSelector } from "react-redux";
import cooperCalculator from "../modules/cooperCalculator";

const DisplayCooperResult = () => {
  const userInput = useSelector(state => state.input)
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
    </>
  )
}

export default DisplayCooperResult