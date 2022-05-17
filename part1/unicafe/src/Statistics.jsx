

const Statistics = ({ label, count }) => {

    return (
        <div style={{ display: "flex", alignItems: "center"}}>
            <h3>{label+ ": "} </h3>
            <p>{count}</p>
        </div>
    )
}
                
export default Statistics