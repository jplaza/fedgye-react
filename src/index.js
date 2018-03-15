import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import jquery from 'jquery';

function randomUserToEmployee(randUser) {
  return {
    profilePic: randUser.picture.large,
    email: randUser.email,
    phone: {
      mobile: randUser.cell,
      home: randUser.phone
    },
    firstName: randUser.name.first,
    lastName: randUser.name.first,
    fullName: randUser.name.first + ' ' + randUser.name.last,
    id: randUser.login.md5
  }
}

function getEmployees(max) {
  return jquery.ajax({
    url: 'https://randomuser.me/api/?results=' + max,
    dataType: 'json'
  });
}

function renderApp(employees) {
  ReactDOM.render(
    <App employees={employees}
         onDropdownChange={loadData} />,
    document.getElementById('root')
  );
}

function loadData(max) {
  getEmployees(max).done(data => {
    const employees = data.results.map(randomUserToEmployee)
    renderApp(employees)
  })
}

// Render the application for the first time with no data
renderApp([]);
registerServiceWorker();
