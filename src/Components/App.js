//MISC
//COMPONENTS
import Navigation from '../Components/Navigation'
//CSS
import '../CSS/App.css';

//TODO
//change func to class
//class has to remember user data- login status (logged in or not)-additional renderings according to login status

function App() {
  return (
    <div className="body">
      <Navigation />
      <iframe title="ASSS" src="https://giphy.com/embed/fSvqyvXn1M3btN8sDh" width="100%" height="500px" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

      <p ><a href="https://github.com/FilipKupanovac/WebProjekt_TimRaketa">Work in progress...</a></p>
    </div>
  );
}

export default App;
