import GlobalStyles from './global.style';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<div>contact</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
