const Person = ({ name, number, deleteOne }) => {
    return (
        <div>
            <p>
                {name} {number} <button onClick={() => deleteOne(name)}>delete</button>
            </p>
        </div>
    )
}

export default Person;