import React from 'react'
import Country from './Country'
import Name from './Name'

const Show = ({ countries, filterFunc }) => {
    const tooManyReply = 'Too many matches, specify another filter'
    if (countries === tooManyReply) {
        return (
            <div>
                {tooManyReply}
            </div>
        )
    }
    else if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    }

    const display = countries.map((country) => <Name key={country.name.common} filFunc={filterFunc} name={country.name.common} />)
    return (
        <div>
            {display}
        </div>
    )
}


export default Show