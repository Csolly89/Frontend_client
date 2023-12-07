import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          {/* <Route exact path='/' element=() /> 
          <Route exact path='/' element=() />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
