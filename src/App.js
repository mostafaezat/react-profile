import "./App.css";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimoials from "./sections/testimonials/Testimonials";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Experience from "./sections/experience/Experience";
function App() {
  return (
    <main>
      <Header />
      <FloatingNav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimoials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
