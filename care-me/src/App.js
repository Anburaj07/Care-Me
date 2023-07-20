import './App.css';
import { Stack} from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Stack className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </Stack>
  );
}

export default App;
