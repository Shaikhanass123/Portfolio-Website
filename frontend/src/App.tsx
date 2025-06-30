import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import AnimatedSection from './components/AnimatedSection';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
       <nav className="navbar">
  <Link to="/" className="nav-link">About Me</Link>
  <Link to="/projects" className="nav-link">Projects</Link>
</nav>
        <AnimatedSection>
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/projects" component={ProjectList} />
          </Switch>
        </AnimatedSection>
        <footer className="footer">
          © 2025 Your Name. All rights reserved. &nbsp;|&nbsp;
          <a href="https://github.com/shaikhanass123" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", marginRight: "1rem" }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/anas-shaikh-1078aa32b" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", marginRight: "1rem" }}>
            LinkedIn
          </a>
          <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>About Me</Link>
          <Link to="/projects" style={{ color: "#fff" }}>Projects</Link>
        </footer>
      </div>
    </Router>
  );
};

export default App;