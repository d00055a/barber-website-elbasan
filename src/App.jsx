import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {

  return (
    <>

      <Header />

    <main>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Location />
    </main>

      <Footer />
      
    </>
  );

}

export default App;
