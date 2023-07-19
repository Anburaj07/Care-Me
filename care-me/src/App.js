import './App.css';
import { Stack} from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <Stack className="App">
      <Navbar/>
      <AllRoutes/>
    </Stack>
  );
}

export default App;
