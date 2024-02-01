import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import {Break} from './components/Break/Break';
import { Specials } from './components/Specials/Specials';

function App() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Break />
    <Specials />
    </div>
  );
}

export default App;
