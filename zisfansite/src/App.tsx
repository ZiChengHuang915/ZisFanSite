import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';
import About from './components/About';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            light: '#666666'
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
