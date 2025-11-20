import {BrowserRouter as Router, Route, Routes} from '<react-router-dom;
import Home from './pages/Home.jsx';

function App () {
    return(
        <Router>
            <Route path="/" element={<Home/>} />
        </Router>
    );
}

export default App;
