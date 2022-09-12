import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Header from './components/header'
import Intro from './components/introbody'

function App() {
  return (

    <HashRouter baseline='/'>
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="" element={<Intro />} /> 


      </Routes>
    </HashRouter>


  );
}

export default App;
