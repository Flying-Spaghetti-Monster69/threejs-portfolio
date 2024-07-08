import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero } from "./components";
import { Suspense, lazy } from "react";

const Works = lazy(() => import("./components/Works"));
const Tech = lazy(() => import("./components/Tech"));
const Experience = lazy(() => import("./components/Experience"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className=" bg-black bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Works />
          <Tech />
          <Experience />
          <About />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
