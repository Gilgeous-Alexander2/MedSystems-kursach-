import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Auth from './pages/auth';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Searchspecialist from './pages/search-specialist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/register' element={<Auth></Auth>}></Route>
        <Route path='/search' element={<Searchspecialist></Searchspecialist>}></Route>

      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
