import './App.css';
import ControlNaviation from './control-navigation/ControlNaviation';
import ControlOptions from './control-options/ControlOptions';
import QuickMenu from './quick-menu/QuickMenu';
import SearchBar from './search-bar/SearchBar';

function App() {
  return (
    <>
      <header>
        <SearchBar/>
      </header>
      <nav>
        <QuickMenu/>
      </nav>
      <main>
        <section>
          <ControlNaviation/>
        </section>
      </main>
      <footer>
        <ControlOptions/>
      </footer>
    </>
  );
}

export default App;
