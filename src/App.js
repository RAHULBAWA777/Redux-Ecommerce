import './App.css';
import AllProducts from './components/AllProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import PageNotFound  from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Routes>
     <Route exact path = "/" element={<AllProducts/>} />
     <Route exact path = "*" element={<PageNotFound/>} />
     <Route exact path = "/products/:productId" element={<ProductDetails/>} />
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
