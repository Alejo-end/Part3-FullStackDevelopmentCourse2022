

const Statistics = ({ labels, counts }) => {

    return (
        <>
            <table>
                <tbody>
                    <td>
                        <tr>{labels[0]}</tr>
                        <tr>{labels[1]}</tr>
                        <tr>{labels[2]}</tr>
                        <tr>{labels[3]}</tr>
                        <tr>{labels[4]}</tr>
                        <tr>{labels[5]}</tr>
                        <tr>{labels[6]}</tr>
                    </td>
                    <td>
                        <tr>{counts[0]}</tr>
                        <tr>{counts[1]}</tr>
                        <tr>{counts[2]}</tr>
                        <tr>{counts[3]}</tr>
                        <tr>{counts[4]}</tr>
                        <tr>{counts[5]}</tr>
                        <tr>{counts[6]}</tr>
                    </td>
                </tbody>
            </table>

        </>
    )
}

export default Statistics