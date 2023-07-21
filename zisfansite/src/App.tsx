import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';

const theme = createTheme({
    palette: {
        primary: {
            main: '#a2d2ff',
            light: '#E1EFF6',
            dark: '#4E5760',
            contrastText: '#000000'
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="AppBackground">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
