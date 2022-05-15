import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer/CartContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
      <Footer />
    </main>
  );
}

export default App;
