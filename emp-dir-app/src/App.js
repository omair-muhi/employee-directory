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
            isFiltered: false,
            employees
        }
        this.handleSortClick = this.handleSortClick.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }
    handleSortClick() {
        const employees = this.state.employees.sort((a, b) => {
            if (a.last < b.last) return -1;
            else if (a.last > b.last) return 1;
            else return 0;
        });
        this.setState(state => ({
            isSorted: !state.isSorted,
            employees
        }));
    }
    handleFilterClick() {
        if (!this.state.isFiltered) {
            const employees = this.state.employees.filter(employee => employee.email.includes("@gmail.com"));
            this.setState(state => ({
                employees
            }));
        } else {
            this.setState(state => ({
                employees
            }));
        }
        this.setState(state => ({
            isFiltered: !state.isFiltered,
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
                <Table employeesArr={this.state.employees}></Table>
            </Wrapper >
        );
    }
}

export default App;
