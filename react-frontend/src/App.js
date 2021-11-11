import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import ListOfEmployees from './components/ListOfEmployees';
import CreateNewEmployee from "./views/CreateNewEmployee";
import DeleteEmployees from "./views/DeleteEmployees";
import Employee from './views/Employee';

import Engagements from './views/Engagements';

import Clients from './views/Clients';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="all-employees" element={<ListOfEmployees />} />
            <Route path="/new-employee" element={<CreateNewEmployee />} />
            <Route path="/delete-employee" element={<DeleteEmployees />} />
            <Route path="/employee/:id" element={<Employee />} />
            <Route path="/all-engagements" element={<Engagements />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </BrowserRouter>
      </header>
      
    </div>
  );
}

export default App;
