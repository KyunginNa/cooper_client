import React, { useState } from 'react'

const InputForm = () => {
  const [distance, setDistance] = useState()
  const [gender, setGender] = useState()
  const [age, setAge] = useState()

  return (
    <>
      <form>
        <label>Distance</label>
        <input
          type="text"
          name="distance"
          data-cy="input-distance"
          onChange={(e) => setDistance(e.target.value)}
        />
        <label>Gender</label>
        <select
          name="gender"
          data-cy="input-gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label>Age</label>
        <input
          type="text"
          name="age"
          data-cy="input-age"
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <p data-cy="cooper-message">
        {age} years old {gender} running {distance} meters.
      </p>
    </>
  )
}

export default InputForm
