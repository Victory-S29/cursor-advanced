import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');`}
      </style>
      <Link to="/" className='form-links-text'>Sign in</Link>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;