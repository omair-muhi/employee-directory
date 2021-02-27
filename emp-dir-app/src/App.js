import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Table from './components/Table';
// import ButtonGroup from './components/ButtonGroup';
import employees from './employees.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSorted: false,
            isFiltered: false
        }
        this.handleSortClick = this.handleSortClick.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }
    handleSortClick() {
        this.setState(state => ({
            isSorted: !state.isSorted
        }));
    }
    handleFilterClick() {
        this.setState(state => ({
            isFiltered: !state.isFiltered
        }));
    }
    render() {
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                <div className="btn-group mb-3">
                    <button type="button" className="btn btn-primary btn-outline-dark" onClick={this.handleSortClick}>
                        {this.state.isSorted ? 'Show' : 'Sort'}
                    </button>
                    <button type="button" className="btn btn-primary btn-outline-dark" onClick={this.handleFilterClick}>
                        {this.state.isFiltered ? 'Show' : 'Filter'}
                    </button>
                </div>
                <Table employeesArr={employees}></Table>
            </Wrapper >
        );
    }
}

export default App;
