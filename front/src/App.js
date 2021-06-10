import './Reset.css';
import { Main } from './AppStyles';

import ControlNaviation from './control-navigation/ControlNaviation';
import ControlOptions from './control-options/ControlOptions';
import QuickMenu from './quick-menu/QuickMenu';
import SearchBar from './search-bar/SearchBar';
import io from 'socket.io-client';
const endPoint = 'http://localhost:8080/';
const socket = io(endPoint);

function App() {
  return (
    <Main>
      <header>
        <SearchBar socket={socket}/>
      </header>
      <nav>
        <QuickMenu socket={socket}/>
      </nav>
      <section>
        <ControlNaviation socket={socket}/>
      </section>
      <footer>
        <ControlOptions socket={socket}/>
      </footer>
    </Main>
  );
}

export default App;
