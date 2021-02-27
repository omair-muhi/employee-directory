import React from 'react';
// import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Table from './components/Table';
import employees from './employees.json';

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                <Table employeesArr={employees}></Table>
            </Wrapper >
        );
    }
}

export default App;
