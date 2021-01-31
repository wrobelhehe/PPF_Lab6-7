
import './App.css';
import CHeader from './components/CHeader'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Info from './components/Info';
import Events from './components/Events';
import Home from './components/Home';
import Event1 from './components/events/event1'
import Event2 from './components/events/event2'
import Event3 from './components/events/event3'
import Event4 from './components/events/event4'
import Event5 from './components/events/event5'
import Event6 from './components/events/event6'
import Event7 from './components/events/event7'
import Event8 from './components/events/event8'
import Event9 from './components/events/event9'




function App() {
    return (
      <Router>
        <div className="App">
          
           <CHeader/>
           <Switch>
       <Route exact path = "/" component={Home}/>
       <Route exact path = "/info" component={Info}/>
       <Route exact path =  "/events" component={Events}/>
       <Route exact path = "/event1" component={Event1}/>
       <Route exact path = "/event2" component={Event2}/>
       <Route exact path = "/event3" component={Event3}/>
       <Route exact path = "/event4" component={Event4}/>
       <Route exact path = "/event5" component={Event5}/>
       <Route exact path = "/event6" component={Event6}/>
       <Route exact path = "/event7" component={Event7}/>
       <Route exact path = "/event8" component={Event8}/>
       <Route exact path = "/event9" component={Event9}/>
        </Switch>
           
        </div>
      </Router>
    );
}

export default App;
