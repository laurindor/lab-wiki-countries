import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>

    <CountriesList />

    <Switch>
    <Route path='/details/:id' exact component={CountryDetails} />
    </Switch>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
