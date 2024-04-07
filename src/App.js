
import About from "./components/about/About";
import Greeting from "./components/greeting/Greeting";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts"

import "./index.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
