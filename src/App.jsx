import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import WorkInProgress from "./components/WorkInProgress";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <WorkInProgress />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
