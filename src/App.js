import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Stopwatch from './pages/Stopwatch';
import Sorting from './pages/Sorting';
import SnakeLadder from './pages/SnakeLadder';
import ProgressBar from './pages/ProgressBar';
import KeyIndex from './pages/keyIndex';
import Todos from './pages/todos';
import RecursiveMenu from './pages/recursive';

const data = [
  {
    name: 'root',
    isFolder: true,
    children: [
      { name: 'package.json', isFolder: false },
      {
        name: 'public',
        isFolder: true,
        children: [
          {
            name: 'images',
            isFolder: true,
            children: [
              { name: 'bg.jpg', isFolder: false },
              { name: 'arrow.svg', isFolder: false },
            ],
          },
        ],
      },
      {
        name: 'src',
        isFolder: true,
        children: [
          { name: 'App.js', isFolder: false },
          { name: 'App.css', isFolder: false },
        ],
      },
    ],
  },
  { name: 'bleh.mp3', isFolder: false },
];

function App() {
  return (
    <Fragment>
      <Link to='/stopwatch'>Stopwatch</Link>
      <Link to='/sorting'>Sorting</Link>
      <Link to='/snakeLadder'>Snakes and Ladders</Link>
      <Link to='/progress'>ProgressBar</Link>
      <Link to='/keyIndex'>KeyIndex</Link>
      <Link to='/todos'>Todos</Link>
      <Link to='/rec'>Rec</Link>
      <Routes>
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/sorting' element={<Sorting />} />
        <Route path='/snakeLadder' element={<SnakeLadder />} />
        <Route path='/progress' element={<ProgressBar />} />
        <Route path='/keyIndex' element={<KeyIndex />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/rec' element={<RecursiveMenu data={data} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
