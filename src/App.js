import {BrowserRouter, Routes, Route} from 'react-router-dom';


// import components
import Footer from './components/footer/Footer';
import Navbar from './components/navigation/Navbar';


// import json data
import data from './data.json';


// import pages
import Home from './pages/Home';

// import Context
import { Context } from './context/Context';


function App() {
  return (
    <BrowserRouter>
      <Context.Provider value={data}>
        <Navbar />
          <div className="main">
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
          </div>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
