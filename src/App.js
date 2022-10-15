
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import {BlogProvider} from "./components/Context/Context";
function App() {
  return (
    
    <Router>
    <BlogProvider>
    <div className="App">
    <Navbar/>
    <div className='content'>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/home" element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    </Routes>
    </div>
    </div>
    </BlogProvider>
    </Router>
    
  );
}

export default App;
