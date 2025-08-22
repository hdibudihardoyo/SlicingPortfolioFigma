import styles from "./styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

const App = () => (
  <div className="bg-[#090E16] text-white px-16">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Home />
        <Experience />
        <AboutMe />


      </div>

    </div>
  </div>
);

export default App;