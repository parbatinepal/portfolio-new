import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Educations/Education";
import Projects from "./Pages/Projects/Projects";
import Techstack from "./Pages/Techstack/Techstack";
import WorkExp from "./Pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    < >
      <Layout/>
      <div className="container">
      <About />
      <Education />
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
      </div>
      <div className="Footer">
        <h4 className="text-center">Made With 😍 Parbati &copy; 2023 </h4>
      </div>
      <ScrollToTop smooth 
      color="#f29f67"
      style={{backgroundColor: "#1e1e2c",borderRadius: "80px"}}
      />
    </>
  );
}

export default App;
