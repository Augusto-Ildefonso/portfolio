import Home from './pages/Home';
import HomePT from './pages/HomePT';
import Projects from './pages/Projects';
import ProjectPT from "./pages/ProjectsPT";
import Blog from "./pages/Blog";
import BlogPT from "./pages/BlogPT";
import AboutMe from "./pages/AboutMe";
import AboutMePT from "./pages/AboutMePT";
import Contact from "./pages/Contact";
import ContactPT from "./pages/ContactPT";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/homept' element={<HomePT />} />
            <Route path='/projects' element={<Projects />}/>
            <Route path='/projectspt' element={<ProjectPT />}/>
            <Route path='/blog' element={<Blog />} />
            <Route path='/blogpt' element={<BlogPT />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/aboutmept' element={<AboutMePT />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contactpt' element={<ContactPT />} />
        </Routes>
    </Router>
  );
}

export default App;
