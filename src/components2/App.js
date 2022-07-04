import Navbar from './Navbar';
import WorkSpace from './WorkSpace'

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<WorkSpace />} />
    </Routes>
    </Router>
  );
}

export default App;
