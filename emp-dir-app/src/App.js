import React from 'react';
// import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Table from './components/Table';
// import employees from './employees.json';

function App() {
    return (
        <Wrapper>
            <Title>Employee Directory</Title>
            <Table></Table>
        </Wrapper>
    );
}

export default App;
