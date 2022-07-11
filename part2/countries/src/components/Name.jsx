import React from 'react'

const Name = ({ name, filFunc }) => {
    const buttonText = 'show'
    return (
        <div>
            {name}
            <button clickFunc={filFunc} description={buttonText} name={name} />
        </div>
    )
}


export default Name