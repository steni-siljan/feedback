import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import PolicyList  from './Components/PolicyList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path='/policy' Component={PolicyList} />
        <Route path='/login' Component={LoginForm} />

    </div>
    </Router>
    
  );
}

export default App;
