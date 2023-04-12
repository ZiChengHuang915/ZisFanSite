import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/email"
                        Component={() => {
                            window.location.href = 'mailto:zichuang127@gmail.com';
                            return null;
                        }}
                    />
                    <Route
                        path="/linkedin"
                        Component={() => {
                            window.location.href = 'https://www.linkedin.com/in/zichenghuang915';
                            return null;
                        }}
                    />
                    <Route
                        path="/github"
                        Component={() => {
                            window.location.href = 'https://github.com/ZiChengHuang915';
                            return null;
                        }}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
