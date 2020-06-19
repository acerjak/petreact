import React, { Component } from 'react'
import Pet from './components/Pet'
import Form from './components/Form'

class App extends Component {

  state = {
    name: '',
    age: '',
    breed: '',
    hairColor: '',
    species: '',
    pets: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    let pets = JSON.parse(JSON.stringify(this.state.pets))

    pets.push({
      name: this.state.name,
      age: this.state.age,
      breed: this.state.breed,
      hairColor: this.state.hairColor,
      species: this.state.species
    })

    this.setState({ 
      pets,
      name: '',
      age: '',
      breed: '',
      hairColor: '',
      species: ''
    })
  }

  render() {
    return (
      <>
        <Form
          name={this.state.name}
          age={this.state.age}
          breed={this.state.breed}
          hairColor={this.state.hairColor}
          species={this.state.species}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        {
          this.state.pets.map(pet => <Pet pet={pet} />)
        }
      </>
    )
  }
}

export default App