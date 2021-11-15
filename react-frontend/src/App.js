import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import ListOfEmployees from './components/ListOfEmployees';
import CreateNewEmployee from "./views/CreateNewEmployee";
import DeleteEmployees from "./views/DeleteEmployees";
import Employee from './views/Employee';

import AllEngagements from './views/AllEngagements';
import Engagement from './views/Engagement';

import AllClients from './views/AllClients';
import Client from './views/Client';

import EditEmployee from './views/EditEmployee';

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
            <Route path="/all-engagements" element={<AllEngagements />} />
            <Route path="/engagement/:id" element={<Engagement />} />
            <Route path="/all-clients" element={<AllClients />} />
            <Route path="/client/:id" element={<Client />} />
            <Route path="/editemployee" element={<EditEmployee />}/>
          </Routes>
        </BrowserRouter>
      </header>
      
    </div>
  );
}

export default App;
