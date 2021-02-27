import React from "react";

function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td>3000</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
