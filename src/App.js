import "./App.css";
import Navbar from "./components/Navbar";

import Topbar from "./components/Topbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfoli2nd from "./pages/Portfoli2nd";
import Portfolio from "./pages/Portfolio";
import ScrollingCards from "./pages/ScrollingCards";
import WorkingProcess from "./pages/WorkingProcess";
import Benifits from "./pages/Benifits";
import Tesimonials from "./pages/Tesimonials";
import Footer from "./pages/Footer";
const appStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gridAutoRows: "minmax(100px, auto)",
  maxWidth: 1080,
  gridGap: "5px",
  margin: "0 auto",
};
const nestedStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  gridGap: "5px",
  gridColumn: "1/11",
};
const firstNavNestedStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  gridGap: "5px",
  gridColumn: "1/11",
  marginTop: "122px",
};

const stickyNav = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  // gridGap: "5px",
  gridColumn: "1/11",
  position: "fixed",
  top: "0",
  width: "100%",
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <div style={stickyNav}>
        <Topbar />
        <Navbar />
      </div>
      <div style={firstNavNestedStyle}>
        <About />
      </div>
      <div style={nestedStyle}>
        <Home />
      </div>
      <div style={nestedStyle}>
        <ScrollingCards />
      </div>
      <div style={nestedStyle}>
        <Portfolio />
      </div>
      <div style={nestedStyle}>
        <Portfoli2nd />
      </div>
      <div style={nestedStyle}>
        <WorkingProcess />
      </div>
      <div style={nestedStyle}>
        <Benifits />
      </div>
      <div style={nestedStyle}>
        <Tesimonials />
      </div>
      <div style={nestedStyle}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
