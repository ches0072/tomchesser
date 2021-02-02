
import './App.css';
import Contents from './components/contents';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Introduction from './components/introduction';

function App() {
  return (
    <div className="App">
      <Introduction />
      {/* <div className = "heading-divider" /> */}
      <Contents />
      <div className = "heading-divider" />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
