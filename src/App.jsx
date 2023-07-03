import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </>
  );
}

export default App;
