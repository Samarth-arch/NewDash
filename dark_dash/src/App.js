import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
   <div className='container-screen'>
    <SideBar/>
    <div className="container-fluid ">
    <Navbar/>
    </div>
    <Dashboard/>
    </div>
  );
}

export default App;
