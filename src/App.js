import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import About from './Components/About';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {



  return (
    <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Calculator />} />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
