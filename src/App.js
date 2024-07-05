import './App.css';
import './reset.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header.jsx';
import About from './components/pages/about/about.jsx';
import Curriculum from './components/pages/curriculum/curriculum.jsx';
import Footer from './components/footer/footer.jsx';
import Projects from './components/pages/projects/projects.jsx';
import Contact from './components/pages/contact/contact.jsx';
import Courses from './components/pages/courses/courses.jsx';

function App() {
  return (
    <div className="App">
       <Router>
        <Header  profileName="Deise Duarte"   />
       

             <Routes>
             <Route path='/' element={<About/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/curriculum' element={<Curriculum/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/courses' element={<Courses/>} />

              </Routes>
        
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
