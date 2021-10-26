
// import './App.css';
import Header from "./Component/Header/Header"
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";
import About from "./Pages/About"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

        {/* <Header /> */}
        <div className="main">
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/upload" component ={Upload}/>
          <Route path="/about" component ={About}/>

        </div>
      </Router>
    </div>
  );
}

export default App;
