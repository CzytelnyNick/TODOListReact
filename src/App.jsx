import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/icons/calendar2-check.svg'
import Todoprompt from './components/Todoprompt';

function App() {
  return (
    <div className="App">
      <div className="container">
        <p className='text-center my-5 fs-1'>TODO Lista</p><i class="bi bi-calendar2-check"></i>
        {
          <Todoprompt></Todoprompt>
        }
      </div>
    </div>
  );
}

export default App;
