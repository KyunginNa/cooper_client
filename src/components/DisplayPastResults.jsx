import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DisplayDoughnutChart from "./DisplayDoughnutChart";
import DisplayLineChart from "./DisplayLineChart";
import axios from 'axios'
import { Divider, Grid, Button } from 'semantic-ui-react'

const DisplayPastResults = () => {
  const dispatch = useDispatch()

  const { credentials, resultSaved } = useSelector(state => state)
  const [renderResults, setRenderResults] = useState(false)

  useEffect(() => {
    async function getResult() {
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
    getResult()
  }, [resultSaved, credentials, dispatch])

  const toggleResults = () => {
    setRenderResults(!renderResults)
  }

  return (
    <>
      {credentials &&
        <>
          <Button
            data-cy="btn-show-index"
            onClick={() => { toggleResults(); }}
            color="teal"
            style={{ margin: 10, marginTop: 25 }}
          >Show Past Results
          </Button>
          {renderResults &&
            <>
              <Divider horizontal style={{ marginBottom: "-3.5em" }}>Line Chart</Divider>
              <Grid style={{ paddingTop: "5em" }}>
                <Grid.Row centered>
                  <DisplayDoughnutChart />
                </Grid.Row>
                <Divider horizontal>Doughnut Chart</Divider>
                <Grid.Row centered>
                  <DisplayLineChart />
                </Grid.Row>
              </Grid>
            </>
          }
        </>
      }
    </>
  )
}

export default DisplayPastResults