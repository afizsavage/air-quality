import { Routes, Route } from 'react-router-dom';

import './App.css';
import Details from './components/Details';
import Home from './components/Home';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>
);

export default App;
