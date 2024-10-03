import './App.css';
import NavBar from './dance.js';
import Home from './home.js';
import Courses from './courses.js';
import Instructors from './instructor.js';
import Contact from './contact.js';
import Enquiry from './enquiry.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Courses/>
      <Instructors/>
      <Contact/>
      <Enquiry/>
    </div>
  );
}

export default App;
