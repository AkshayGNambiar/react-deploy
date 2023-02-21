import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      
       <Col size={5} sm={8} className="text-center text-sm-end">
       <p>Contact me@91-8304952375   Email : nambiarakshayg@gmail.com </p>
      
          </Col>
          <Col size={5} sm={7} className="text-center text-sm-end">
            <p>Address : Calicut ,Kerala ,India Pin : 673307</p>
          </Col>

    </div>
  );
}

export default App;
