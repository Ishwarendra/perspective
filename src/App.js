import About from "./components/About/About";
import CallForPapersHomePage from "./components/CallForPapersHomePage/CallForPapersHomePage";
import CallForPapersNavbar from "./components/CallForPapersNavbar/CallForPapersNavbar";
import ConferenceCommittee from "./components/ConferenceCommittee/ConferenceCommittee";
import Contact from "./components/Contact";
import Corousal from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import ImportantDetails from "./components/ImportantDetails";
import Login from "./components/Login";
import Sponsers from "./components/Sponsers/Sponsers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CallForPapersNavbar />
      <ImportantDetails />
      <Contact />
      <Login />
      <Corousal />
      <About />
      <Sponsers />
      <ConferenceCommittee />
      <CallForPapersHomePage />
      <Footer />
    </div>
  );
}

export default App;
