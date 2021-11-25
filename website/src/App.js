import React from "react";
import { Header, About, Projects, Footer } from "./layout";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
