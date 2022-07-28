import Nav from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"
import Analytics from "./Components/Analytics/Analytics"
import Newsletter from "./Components/Newsletter/Newsletter"
import Offers from "./Components/Offers/Offers"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Offers/>
    </ div>
  );
}

export default App;
