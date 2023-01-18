import '../Styles/App.css';
import {Navbar} from "./Navbar";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {FAQ} from "./FAQ";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='cont'>
        <Header />
        <div className='page'></div>
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
