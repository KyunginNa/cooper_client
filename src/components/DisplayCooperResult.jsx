import React from "react";

import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";

import { Button, Message } from "semantic-ui-react"

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
        <Message>
          <Message.Header>Your result</Message.Header>
          <p id="cooper-message">
            {age} years old {gender} running {distance} meters.
            </p>
          <p id="cooper-result">Result: {result}</p>
        </Message>

          {authenticated && !entrySaved ? (
            <Button
              id="save-result"
              onClick={() => saveData(result, age, distance, entryHandler)}
            >
              Save entry
            </Button>
          ) : (
            <Message>
              <p id="response-message">Your entry was saved</p>
            </Message>
            )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;