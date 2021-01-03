import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const DisplayPastResults = () => {
  const dispatch = useDispatch()

  const credentials = useSelector(state => state.credentials)
  const pastResults = useSelector(state => state.pastResults)
  const [renderResults, setRenderResults] = useState(false)

  const getResult = async () => {
    let pastResults = await axios.get("/performance_data",
      {
        headers: {
          ...credentials,
          "Content-type": "application/json",
          Accept: "application/json"
        }
      }
    )
    dispatch({ type: 'GET_PAST_RESULTS', payload: pastResults.data.entries })
    debugger
    setRenderResults(!renderResults)
  }

  useEffect(getResult, [])

  return (
    <>
      <button
        data-cy="btn-show-index"
        onClick={getResult}
      >Show past results
      </button>
      {
        <ul data-cy="performance-data-index">
          {renderResults &&
            pastResults.map(item => {
              return <li key={item.id}>{item.data.age} {item.data.distance} {item.data.result}</li>
            })
          }
        </ul>
      }
    </>
  )
}

export default DisplayPastResults
