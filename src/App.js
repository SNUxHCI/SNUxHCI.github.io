import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import MainPage from './pages/MainPage/Mainpage';
import AboutPage from './pages/AboutPage/AboutPage';
import NewsPage from './pages/NewsPage/NewsPage';
import LabPage from './pages/LabPage/LabPage';
import PublicationPage from './pages/PublicationPage/PublicationPage';
import CoursePage from './pages/CoursePage/CoursePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/news' element={<NewsPage/>} />
        <Route path='/labs' element={<LabPage/>} />
        <Route path='/publications' element={<PublicationPage/>} />
        <Route path='/courses' element={<CoursePage/>} />
        {/* TODO... in Future... */}
        <Route path='/community' element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
