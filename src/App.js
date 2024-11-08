
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup/Signup';
import SignupEmail from './pages/Signup/SignupEmail';
import SignupVerified from './pages/Signup/SignupVerified';
import Login from './pages/Login/Login';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ForgetPassword/ResetPassword';
import ResetStatus from './pages/ForgetPassword/ResetStatus';
import ResetEmail from './pages/ForgetPassword/ResetEmail.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/sentMail' element={<SignupEmail/>}/>
      <Route path='/verifiedMail' element={<SignupVerified/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgetPassword' element={<ForgetPassword/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/resetEmail' element={<ResetEmail/>}/>
      <Route path='/resetStatus' element={<ResetStatus/>}/>
    </Routes>
  );
}

export default App;
