import { BrowserRouter as Router, } from 'react-router-dom';
import Routes from './Routes';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//pusher start

// const pusher = require('pusher-js');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

//     app.use(cors());
//     app.use(bodyParser.urlencoded({extended: false}));
//     app.use(bodyParser.json());
// var pusher = new Pusher({
//   appId: '1252599',
//   key: 'bbf39f5f90e07e26548c',
//   secret: '4e18eaf76161d02d1f67',
//   cluster: 'ap2',
//   encrypted: true
// });
// app.set('PORT', process.env.PORT || 8000);

// app.post('/message', (req, res) => {
//   const payload = req.body;
//   pusher.trigger('chat', 'message', payload);
//   res.send(payload)
// });

// app.listen(app.get('PORT'), () => 
//   console.log('Listening at ' + app.get('PORT')))

// pusher end

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
