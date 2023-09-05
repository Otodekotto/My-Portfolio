import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage></LandingPage>
      <ScrollToTop />
    </div>
  );
}

export default App;
