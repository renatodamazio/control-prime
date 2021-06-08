import './Reset.css';
import { Main } from './AppStyles';

import ControlNaviation from './control-navigation/ControlNaviation';
import ControlOptions from './control-options/ControlOptions';
import QuickMenu from './quick-menu/QuickMenu';
import SearchBar from './search-bar/SearchBar';

function App() {
  return (
    <Main>
      <header>
        <SearchBar/>
      </header>
      <nav>
        <QuickMenu/>
      </nav>
      <section>
        <ControlNaviation/>
      </section>
      <footer>
        <ControlOptions/>
      </footer>
    </Main>
  );
}

export default App;
