import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PostPage from './components/PostPage';
import Form from './components/form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="viewpost" element={<PostPage />}></Route>
        <Route path="createpost" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;