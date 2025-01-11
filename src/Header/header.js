import logo from '../logo.svg';


function Header_Add(props)
{
    //let tuty = "Hello ReactJS"; 
    //let desc = "Welcome to";
    return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1> {props.title} </h1>
    <p>
       {props.discription} <code>src/App.js</code> and id Home.
    </p>
    <a
      className="App-link"
      href="https://github.com/okovtun/PD_321_WEB/tree/master/React"
      target="_blank"
      rel="noopener noreferrer"
    >
      Terminator
      // props - параметр передваемый в функцию
    </a>
  </header>
  )
}
export default Header_Add;
