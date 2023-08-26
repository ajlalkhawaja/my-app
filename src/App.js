// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// two types. functions based and class based
//below is the function based

function App() {
  // in function we return the jsx, everything written in return is jsxx
  return ( 
    // we use jsx fragment to return multiple divs or tags <> </>
    <>
    <Navbar title='Ajlal' aboutText='About Ajlal'/>
    <div className="container my-3">
    <TextForm heading='Enter the text to analyze' />
    </div>
    <About />
    </>
  );
}

export default App;
