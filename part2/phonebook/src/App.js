import { useState } from 'react'
import Person from './components/Person'
import Form from './components/Form'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSetPerson = (event) => {
    setNewName(event.target.value)
  }
  
  const handleAddPerson = (event) => {
    event.preventDefault()
    let newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form submitFunc={handleAddPerson} inputValue={newName} inputChangeFunc={handleSetPerson} inputDesc='name' buttonDesc='add'/>
      <h2>Numbers</h2>
      {persons.map((person) => <Person key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App;