import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import BlackStrips from "./components/blackstrip/Blackstrip";

function App() {
  return (
    <div>
      <BlackStrips></BlackStrips>
      <Navbar />
      <LandingPage></LandingPage>
      <ScrollToTop />
    </div>
  );
}

export default App;
