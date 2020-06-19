import React from 'react'

const Pet = props => {
  console.log(props.pet)
  return (
            <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem"}}>
                <div className="card-header">{props.pet.name}</div>
                <div className="card-body">
                        <p className="card-text">Age: {props.pet.age}</p>
                        <p className="card-text">Breed: {props.pet.breed}</p>
                        <p className="card-text">Hair Color: {props.pet.hairColor}</p>
                        <p className="card-text">Species: {props.pet.species}</p>
                </div>
            </div>
  )
}

export default Pet




