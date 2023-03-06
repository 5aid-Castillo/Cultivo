import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./views/Home";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
    <Header />  
    </BrowserRouter>
     <Home />
    <Footer />
  </>
  );
}

export default App;
