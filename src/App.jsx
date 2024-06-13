import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  Works,
  Tech,
  About,
  Contact,
  StarsCanvas,
  Experience,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className=" bg-black bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <Tech />
        <Experience />
        <About />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
