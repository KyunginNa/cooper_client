import React from "react";
import { useDispatch, useSelector } from "react-redux";

const InputForm = () => {
  const dispatch = useDispatch()
  const userInput = useSelector(state => state.input)
  const onSubmitHandler = e => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_INPUTS',
      payload: {
        distance: e.target.distance.value,
        gender: e.target.gender.value,
        age: e.target.age.value
      }
    })
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>Distance</label>
        <input
          type="text"
          name="distance"
          data-cy="input-distance"
        />
        <label>Gender</label>
        <select
          name="gender"
          data-cy="input-gender"
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label>Age</label>
        <input
          type="text"
          name="age"
          data-cy="input-age"
        />
        <input
          type="submit"
          value="See A Result"
          data-cy="btn-result"
        />
      </form>
      <p data-cy="cooper-message">
        {userInput.age} years old {userInput.gender} running {userInput.distance} meters.
      </p>
    </>
  )
}

export default InputForm
