import React from "react";
import { Header, About, Stack, Projects, Footer } from "./layout";

function App() {
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
