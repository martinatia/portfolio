import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Jobs } from "./components/Work/Work";
import { CurriculumBotton } from "./components/CurriculumBotton/CurriculumBotton";


function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Jobs/>
      <CurriculumBotton/>
      <Contact/>
    </div>
  )
}

export default App;
