import { useState } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import Title from './components/Title'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleSetPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleAddPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to the phonebook`)
      return
    }
    let newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }
  const showPersons = () => {
    if(newFilter==='') {
      return persons
    }
    else {
      return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    }
  } 

  return (
    <div>
      <Title title='Phonebook'/>
      <Filter inputNameValue={newFilter} inputNameChangeFunc={handleFilterChange}/>
      <Title title='Add a new contact'/>
      <Form submitFunc={handleAddPerson} nameValue={newName} phoneValue={newNumber} inputChangeFunc={handleSetPerson} inputPhoneFunc={handleNumberChange} buttonDesc='add'/>
      <Title title='Numbers'/>
      {showPersons().map((person) => <Person key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App;