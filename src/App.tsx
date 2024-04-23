import { Link } from 'react-router-dom';
import { RouterElement } from './Router.tsx';
import Navbar from './components/navbar.tsx';
import Hero from './components/hero.tsx';
function App() {
  return (
    <div className='bg-black w-full h-screen '>

    <Navbar/>
    <Hero />
    </div>
  );
}

export default App;
