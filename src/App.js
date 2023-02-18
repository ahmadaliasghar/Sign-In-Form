import Login from './pages/login/Login';
import ForgetPassword from './pages/login/ForgetPassword';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Nomatch from './pages/Nomatch';

function App() {
  return (
    <>
          <Router>
          <Routes>
          <Route exact={true} path="/login" element={<Login/>} />
          <Route exact={true} path="/home" element={<Home/>} />
          <Route exact={true} path="/signup" element={<Signup/>} />
          <Route exact={true} path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/" element={<Login/>} />
          <Route path="*" element={<Nomatch/>} />
          
        </Routes>
        </Router>
        </>
  );
}

export default App;
