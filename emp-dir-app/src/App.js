import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Table from './components/Table';
import employees from './employees.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSorted: false }
        this.handleSortClick = this.handleSortClick.bind(this);
    }
    handleSortClick() {
        this.setState(state => ({
            isSorted: !state.isSorted
        }));
    }
    render() {
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                <button type="button" className="btn btn-primary mb-3" onClick={this.handleSortClick}>
                    {this.state.isSorted ? 'Show' : 'Sort'}
                </button>
                <Table employeesArr={employees}></Table>
            </Wrapper >
        );
    }
}

export default App;
