const Form = ({ submitFunc, nameValue, phoneValue, inputChangeFunc, inputPhoneFunc, buttonDesc }) => {
    return (
        <form onSubmit={submitFunc}>
            <div>
                name: <input value={nameValue} onChange={inputChangeFunc} />
            </div>
            <div>
                phone: <input value={phoneValue} onChange={inputPhoneFunc} />
            </div>
            <div>
                <button type="submit">{buttonDesc}</button>
            </div>
        </form>
    )
}

export default Form;