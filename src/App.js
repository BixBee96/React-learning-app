import React from "react";
import Footer from "./components/Footer";
import FormArea from "./components/FormArea";
import Header from "./components/Header";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div>
      <Header />
      <FormArea />
      <Notes />
      <Notes />
      <Notes />
      <Footer />
    </div>
  );
};

export default App;
