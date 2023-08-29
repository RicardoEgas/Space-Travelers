import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/missions" element={<Display />} />
        <Route path="/profile" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
