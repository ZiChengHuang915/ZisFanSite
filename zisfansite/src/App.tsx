import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';

const theme = createTheme({
    palette: {
        primary: {
            main: '#AF9FA5',
            light: '#EDE3E4',
            dark: '#92898A',
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
