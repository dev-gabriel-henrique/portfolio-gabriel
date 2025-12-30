import { Sidebar } from "./components/Sidebar";
import { ThemesSection } from "./components/ThemesSection";
import ThemeProvider from "./contexts/ThemeProvider";
import { About } from "./pages/About";
import { Jobs } from "./pages/Jobs";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <ThemeProvider>
      <ThemesSection />
      <Home />
      <About />
      <Jobs />
      <Projects />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
