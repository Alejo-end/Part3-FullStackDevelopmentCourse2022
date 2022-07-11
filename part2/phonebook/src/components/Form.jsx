

const Form = ({ submitFunc, inputValue, inputChangeFunc, inputDesc, buttonDesc }) => {
    return (
        <form onSubmit={submitFunc}>
            <div>
                {inputDesc}: <input value={inputValue} onChange={inputChangeFunc} />
            </div>
            <div>
                <button type="submit">{buttonDesc}</button>
            </div>
        </form>
    )
}

export default Form