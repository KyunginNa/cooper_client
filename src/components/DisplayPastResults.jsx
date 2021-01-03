import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DisplayDoughnutChart from "./DisplayDoughnutChart";
import DisplayLineChart from "./DisplayLineChart";
import axios from 'axios'

const DisplayPastResults = () => {
  const dispatch = useDispatch()

  const credentials = useSelector(state => state.credentials)
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
  }

  useEffect(getResult, [])

  const toggleResults = () => {
    setRenderResults(!renderResults)
  }

  return (
    <>
      <button
        data-cy="btn-show-index"
        onClick={() => { getResult(); toggleResults(); }}>
        Show Past Results
    </button>
      {
        renderResults &&
        <>
          <DisplayDoughnutChart />
          <DisplayLineChart />
        </>
      }
    </>
  )
}

export default DisplayPastResults