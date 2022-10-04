import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {Container} from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className='p-4'>
      <Products />  
      </Container>
    </div>
  );
}

export default App;
