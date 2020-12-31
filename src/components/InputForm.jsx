import React from "react";
import { useDispatch } from "react-redux";

const InputForm = () => {
  const dispatch = useDispatch()
  const saveCooperInputs = e => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_INPUTS',
      payload: {
        distance: e.target.distance.value,
        gender: e.target.gender.value,
        age: e.target.age.value,
      }
    })
  }

  return (
    <>
      <form onSubmit={saveCooperInputs}>
        <label>Distance</label>
        <input
          type="text"
          name="distance"
          data-cy="input-distance"
          onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
        />
        <label>Gender</label>
        <select
          name="gender"
          data-cy="input-gender"
          onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label>Age</label>
        <input
          type="text"
          name="age"
          data-cy="input-age"
          onChange={() => dispatch({ type: 'INPUT_CHANGE' })}
        />
        <input
          type="submit"
          value="See A Result"
          data-cy="btn-result"
        />
      </form>
    </>
  )
}

export default InputForm
