import { BrowserRouter as Router, } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div class="wrapper">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
