import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmlpoyeeComponent from './components/UpdateEmlpoyeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployeeComponent}></Route>
                <Route path="/employees" exact  component={ListEmployeeComponent}></Route>
                <Route path="/add-employee/:id" exact  component={CreateEmployeeComponent}></Route>
                <Route path="/view-employee/:id" exact  component={ViewEmployeeComponent}></Route>
                {/*<Route path="/update-employee/:id"  exact component={UpdateEmlpoyeeComponent}></Route>*/}
              
              </Switch>
            </div>
          <FooterComponent/>
         
      </Router>
    </div>
  );
}

export default App;
