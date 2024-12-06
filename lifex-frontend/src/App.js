import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './webpages/authPage/AuthPage';
import Mission from './webpages/mission/Mission';
import Home from './webpages/main/Home';
import Pills from './webpages/pills/Pills';
import Diet from './webpages/diet/Diet'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/Pills' element={<Pills/>}/>
        <Route path='/diet' element={<Diet/>}/>
      </Routes>
    </Router>
  );
}

export default App;
