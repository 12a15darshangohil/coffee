import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>

  )
}

export default App;
