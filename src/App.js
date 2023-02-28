import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

/**
 * The App function returns a div that contains a Navbar component and a Textform component
 * @returns The Navbar and Textform components are being returned.
 */
function App() {
  return (
    <div>
      <Navbar title="TextUtils"/>
      <Main/>
    </div>
  );
}

export default App;
