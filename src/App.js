import React, { Component, useState } from 'react';
//import './App.css'
//import NavBar from './components/navbar';
//import Counters from './components/counters';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './views/login';
import Register from './components/register';
//import Register from './components/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useToken from './useToken';


const App = props => {
    // state = {
    //     counters: [
    //         {id: 1, value: 1},
    //         {id: 2, value: 2},
    //         {id: 3, value: 3},
    //     ]
    // }

    // handleIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    // }

    // handleDecrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value--;
    //     this.setState({counters});
    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map(c=>{
    //         c.value = 0;
    //         return c;
    //     });
    //     this.setState({counters});
    // }

    // handleDelete = counterId => {
    //     const counters = this.state.counters.filter(c => c.id != counterId);
    //     this.setState({counters});
    // }

    const { token, setToken } = useToken();
    if(!token) {
      return <Login setToken={setToken} />
    }
  return (
    // <React.Fragment>
    //   <NavBar/>
    //   <main className="container">
    //     <Counters
    //      counters={this.state.counters}
    //      onIncrement={this.handleIncrement}
    //      onDecrement={this.handleDecrement}
    //      onDelete={this.handleDelete}
    //      onReset={this.handleReset} />
    //   </main>
    // </React.Fragment>
   <React.Fragment>
    <h1>Application</h1>
    <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/preferences" element={<Preferences />}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
 }

export default App;