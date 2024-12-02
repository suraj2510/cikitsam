import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CopyRight from "./pages/CopyRight";
import Hero from "./pages/Hero";
import Team from "./pages/Team"
const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Team/>
      <Contact/>
      <CopyRight/>
    </>
  );
};

export default App;
