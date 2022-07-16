import { useState, useEffect } from 'react'
import axios from 'axios'
import Show from './components/Show'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const showCountries = () => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    const tooManyReply = 'Too many matches, specify another filter'
    if(filteredCountries.length > 10) {
      return tooManyReply
    }
    return filteredCountries
  }

  useEffect(() => { //as shown in part 2, effect hooks, it the country data
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      Find Countries: <input value={newFilter} onChange={handleFilterChange}/>        
      <Show countries={showCountries()} filterFunc={setNewFilter} />
    </div>
  )
}

export default App