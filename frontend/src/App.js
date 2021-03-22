import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './componenets/Home/Home';
import ContactList from './componenets/ContactList/ContactList';
import ContactAddEdit from './componenets/ContactAddEdit/ContactAddEdit';


function App() {
  return (
    <div className="App">

      <Home/>
      <Switch>
        <Route exact path="/" component={ContactList}/>
        <Route path="/(add-contact|eddit-contact)" component={ContactAddEdit}/>
      </Switch>
     
   
    </div>
  );
}

export default App;
