import { NavBar } from "./components/NavBar";
import { ThemesSection } from "./components/ThemesSection";
import ThemeProvider from "./contexts/ThemeProvider";
import { About } from "./pages/About";
import { Experiences } from "./pages/Experiences";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <ThemeProvider>
      <ThemesSection />
      <NavBar />
      <Home />
      <About />
      <Experiences />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
