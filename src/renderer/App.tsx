import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import AddEvent from './components/AddEvent';
import Header from './components/partials/Header';
import TodoList from './components/TodoList';
import HomeHero from './sections/HomeHero';

function Hello() {
  return (
    <div style={{
      height: "100vh",
      display: "flex"
    }}>
      <HomeHero />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}
