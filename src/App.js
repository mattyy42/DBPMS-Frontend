import { BrowserRouter as Router,  } from 'react-router-dom';
import Routes from './Routes';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
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
