import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Share/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
