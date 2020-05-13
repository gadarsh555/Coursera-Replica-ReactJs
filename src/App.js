import React,{Component} from 'react'
import Login from './components/Login'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
render(){
return(
      <Router>
        <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/login' component={Login} />
         </Switch>
      </Router>
);
}
}

export default App
