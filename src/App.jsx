import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Contact, StarsCanvas } from "./components";
import { Suspense, lazy } from "react";

const Works = lazy(() => import("./components/Works"));
const Tech = lazy(() => import("./components/Tech"));
const Experience = lazy(() => import("./components/Experience"));
const About = lazy(() => import("./components/About"));

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
        </Suspense>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
