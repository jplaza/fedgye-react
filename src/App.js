import React, {Component} from 'react';
import logo from './logo.svg';
import {Dropdown, DropdownItem} from './Dropdown';
import EmployeeCard from './EmployeeCard';
import './App.css';


class App extends Component {
  dropdownOptions() {
    return this.props.data.map(
      item => (
        <DropdownItem key={item.value} value={item.value}>
          {item.label}
        </DropdownItem>
      )
    )
  }
  render() {
    const employees = this.props.employees;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crea tus propios componentes con React - Frontend Dev Guayaquil!</h1>
          <div>
            <h3>Selecciona el número de empleados que quieres ver</h3>
            <Dropdown onChange={(evt) => this.props.onDropdownChange(evt.target.value)}>
              <DropdownItem value="0">-</DropdownItem>
              <DropdownItem value="3">3</DropdownItem>
              <DropdownItem value="6">6</DropdownItem>
              <DropdownItem value="9">9</DropdownItem>
              <DropdownItem value="12">12</DropdownItem>
              <DropdownItem value="24">24</DropdownItem>
            </Dropdown>
          </div>
        </header>
        <div className="App-content">
          {employees.map(emp => <EmployeeCard key={emp.id} {...emp} />)}
        </div>
      </div>
    );
  }
}

/*
<p className="App-intro">
  Demo de un <code>&lt;Dropdown /&gt;</code>
</p>
<div>
  <Dropdown onChange={(evt) => console.log(evt.target.value)}>
    {this.dropdownOptions()}
  </Dropdown>
</div>
*/

export default App;
