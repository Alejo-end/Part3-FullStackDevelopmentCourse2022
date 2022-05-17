

const Statistics = ({ label, count }) => {

    return (
        <div style={{ display: "flex", alignItems: "center", padding: 0}}>
            <h4>{label+ ": "} </h4>
            <p>{count}</p>
        </div>
    )
}
                
export default Statistics