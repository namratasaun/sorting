import { Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Stopwatch from './pages/Stopwatch';
import Sorting from './pages/Sorting';
import SnakeLadder from './pages/SnakeLadder';
import ProgressBar from './pages/ProgressBar';

function App() {
  return (
    <Fragment>
      <Link to='/stopwatch'>Stopwatch</Link>
      <Link to='/sorting'>Sorting</Link>
      <Link to='/snakeLadder'>Snakes and Ladders</Link>
      <Link to='/progress'>ProgressBar</Link>
      <Routes>
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/sorting' element={<Sorting />} />
        <Route path='/snakeLadder' element={<SnakeLadder />} />
        <Route path='/progress' element={<ProgressBar />} />
      </Routes>
    </Fragment>
  );
}

export default App;
