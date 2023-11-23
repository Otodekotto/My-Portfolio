import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import BlackStrips from "./components/blackstrip/Blackstrip";
import ImageAnimation from "./components/imageAnimation/ImageAnimation";

function App() {
  return (
    <div>
      <ImageAnimation></ImageAnimation>
      <BlackStrips></BlackStrips>
      <Navbar />
      <LandingPage></LandingPage>
      <ScrollToTop />
    </div>
  );
}

export default App;
