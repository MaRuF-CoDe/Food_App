// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.esm.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
