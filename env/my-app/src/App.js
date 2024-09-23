import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Info from './main-page/info-page';
import Main from './main-page/main-page';
import { Route, Routes } from "react-router-dom"
import Home from './pages/home';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
