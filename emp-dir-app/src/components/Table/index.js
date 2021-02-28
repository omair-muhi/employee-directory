import React from "react";

function Table(props) {
    const employees = props.employeesArr;
    const tableData = employees.map((employee, index) =>
        <tr key={index}>
            <td>{employee.first}</td>
            <td>{employee.last}</td>
            <td>{employee.email}</td>
            <td>{employee.balance}</td>
        </tr>
    )
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
                {tableData}
            </tbody>
        </table>
    );
}

export default Table;
