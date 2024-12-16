import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CopyRight from "./pages/CopyRight";
import Dashboard from "./pages/Dashboard";
import Hero from "./pages/Hero";
import Team from "./pages/Team";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Hero />
        <About />
        <Team />
        <Contact />
        <CopyRight />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Header />
        <About />
        <Team />
        <Contact />
        <CopyRight />
      </div>
    ),
  },
  {
    path: "/team",
    element: (
      <div>
        <Header />
        <Team />
        <Contact />
        <CopyRight />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Header />
        <Contact />
        <CopyRight />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
