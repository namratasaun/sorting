import { Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Stopwatch from './pages/Stopwatch';
import Sorting from './pages/Sorting';
import SnakeLadder from './pages/SnakeLadder';

function App() {
  return (
    <Fragment>
      <p>hello</p>
      <p>hello3</p>
      <p>hello4</p>
      <Routes>
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/sorting' element={<Sorting />} />
        <Route path='/snakeLadder' element={<SnakeLadder />} />
      </Routes>
      <Link to='/stopwatch'>Stopwatch</Link>
      <Link to='/sorting'>Sorting</Link>
      <Link to='/snakeLadder'>Snakes and Ladders</Link>
    </Fragment>
  );
}

export default App;
