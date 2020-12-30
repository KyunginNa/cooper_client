import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SaveCooperResult = () => {
  const dispatch = useDispatch()
  const submitted = useSelector(state => state.input.submitted)
  const authenticated = useSelector(state => state.authenticated)
  const resultSaved = useSelector(state => state.resultSaved)
  return (
    <>
      {submitted &&
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

export default SaveCooperResult
