  import 'bootstrap/dist/css/bootstrap.min.css';
  import Navb from './components/Navb';
  import Slider from'./components/imageSlider';
  import app from'./app.css';
  import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
  import Accueil from './pages/Accueil';
import Produits from './pages/Produits';
import Poterie from './pages/Poterie';
import Contact from './pages/Contact';
import Footer from './components/footer';

  function App() {
    return(
  <>
  <Router>
  <Navb/>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/produits' element={<Produits />} />
        <Route path='/poterie' element={<Poterie />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </>  
    );
  }

  export default App;
