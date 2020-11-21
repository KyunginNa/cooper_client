import React from "react";

import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";

import { Button } from "semantic-ui-react"

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
          <p id="cooper-message">
            {age} y/o {gender} running {distance} meters.
            </p>
          <p id="cooper-result">Result: {result}</p>
          {authenticated && !entrySaved ? (
            <Button
              id="save-result"
              onClick={() => saveData(result, age, distance, entryHandler)}
            >
              Save entry
            </Button>
          ) : (
              <p id="response-message">Your entry was saved</p>
            )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;