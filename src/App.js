import { Routes, Route, Link } from 'react-router-dom';
import Stopwatch from './pages/Stopwatch';

function App() {
  return (
    <Routes>
      <Route path='/stopwatch' element={<Stopwatch />} />
      {/* <Route path='/about' element={<About />} /> */}
    </Routes>
  );
}

export default App;
