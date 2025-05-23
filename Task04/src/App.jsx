import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/MovieComponents/views/navBar';
import HomePage from './components/MovieComponents/pages/HomePage';
import MoviesPage from './components/MovieComponents/pages/MoviesPage';
import ActorsPage from './components/MovieComponents/pages/ActorPage';
import TvShowsPage from './components/MovieComponents/pages/TvShowsPage';

function App() {
    return (
        <Router>
            <div className="app">
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/actors" element={<ActorsPage />} />
                        <Route path="/tv-shows" element={<TvShowsPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;