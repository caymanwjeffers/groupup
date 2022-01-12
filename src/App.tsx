
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './FirebaseConfig'
import './App.css'

// Screens
import Dashboard from './screens/Dashboard';
import ItineraryPlanner from './screens/ItineraryPlanner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/ItineraryPlanner' element={<ItineraryPlanner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
