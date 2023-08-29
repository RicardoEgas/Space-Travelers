import { Outlet, Routes, Route } from 'react-router';
import Header from './components/Header';
import './App.css';
import MyProfile from './components/profile';
import Missions from './components/missions';
import Dragons from './components/dragons';
import Rockets from './components/Rockets';

const Home = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
