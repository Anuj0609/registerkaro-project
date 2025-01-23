import { useState } from "react";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import Hero from "./components/Hero";
import TrustedBySection from "./components/TrustedBySection";
import Services from "./components/Services";
import About from "./components/About";
import Why from "./components/Why";
import Video from "./components/Video";
import Clients from "./components/Clients";
import Process from "./components/Process";
import Transformation from "./components/Transformation";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import Industry from "./components/Industry";
import Numbers from "./components/Numbers";
import Manage from "./components/Manage";
import Accordian from "./components/Accordian";
import Says from "./components/Says";

function App() {
  return (
    <div>
      <Navbar />
      <SubHeader />
      <Hero />
      <TrustedBySection />
      <Services/>
      <About/>
/      <Video/>
      <Clients/>
      <Process/>
      <Transformation/>
      <Says/>
      <Accordian/>
      <Manage />
      <Numbers/>
      <Industry/>
      <Brand/>
      <Footer/>
      
    </div>
  );
}
export default App;
