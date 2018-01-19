import React, { Component } from 'react';
import NavBar from './navbar/navbar.js'
import Sidebar from './sidebar/sidebar.js'
import DashBoard from './dashboard/dashboard.js'
import './App.css';

class App extends Component {
  render() {
    return (
     <body>

<NavBar/>
<Sidebar />
<DashBoard />
  
</body>
  

    );
  }
}

export default App;
