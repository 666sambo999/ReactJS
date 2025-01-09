
import './App.css';
import Header_Add from './Header/header.js';
import Artical from './Artical/Artical';
//import img from './public';
import Footer from './footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header_Add></Header_Add>
      <Artical>Посмотри</Artical>
      <Footer></Footer>
    </div>
  );
}

export default App;
