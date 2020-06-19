import React from 'react'

const Form = props => {
  return (
    <form>
      <p>
        <label htmlFor="name">name</label>
        <input
            type="text"
            name="name"
            id="name"
            onChange={props.handleInputChange}
            value={props.name} />
      </p>
      <p>
        <label htmlFor="age">age</label>
        <input
            type="text"
            name="age"
            id="age "
            onChange={props.handleInputChange}
            value={props.age} />
      </p>
      <p>
        <label htmlFor="breed">breed</label>
        <input
            type="text"
            name="breed"
            id="breed"
            onChange={props.handleInputChange}
            value={props.breed} />
      </p>
      <p>
        <label htmlFor="hairColor">hair color</label>
        <input
            type="text"
            name="hairColor"
            id="hairColor"
            onChange={props.handleInputChange}
            value={props.hairColor} />
      </p>
      <p>
        <label htmlFor="species">species</label>
        <input
            type="text"
            name="species"
            id="species"
            onChange={props.handleInputChange}
            value={props.species} />
      </p>
      <button onClick={props.handleSubmit}>Submit</button>
    </form>
  )
}

export default Form