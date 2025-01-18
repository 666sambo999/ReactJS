
import './App.css';
import Header_Add from '../Header/header.js';
import Artical from '../Artical/Artical.js';
//import img from './public';
import Footer from '../footer/footer.js';
import Power from '../power/power.js';
import Navig from '../Nav/nav.js';
import data from '../Artical/db.json';
import Factorial from '../Factor/factor.js';
import Fibonachi from './Fibon/fibon.js';


function App() {
  let nav = 
  {
    "Главная" :   "/index",
    "Новости" :   "/new",
    "Магазин" :   "/shop",
    "О нас"   :   "/about",
    "Контакты":   "/contacts",
  }

  let db = data;
  return (
    <div className="App">
      <Header_Add title ="Hello ReactJS" discription ="This is my first React App. This phrase passed using parameters over 'PROPS'">
      </Header_Add>
      <Navig navigation={nav}></Navig>
      <Power a={2} n={8}> </Power>
      <Footer></Footer>
      <Artical db={db}/>
      <Factorial a={6}></Factorial>
      <Fibonachi n={6}></Fibonachi>
    </div>
  );
}

export default App;
