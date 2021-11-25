import React, { useEffect } from "react";
import { Header, About, Stack, Projects, Footer } from "./layout";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
