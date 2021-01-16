import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Main from './components/Main'
import Posts from './components/Posts'
import Photos from './components/Photos'
import Contacts from './components/Contacts'
import ContactSingle from "./components/ContactSingle"

function App() {
  return (
    <Router>
      <div className="nav">
        <NavLink className="navigation" activeClassName="nav-selected" to="/main">
          Головна
        </NavLink>
        <NavLink className="navigation" activeClassName="nav-selected" to="/posts">
          Публікації
        </NavLink>
        <NavLink className="navigation" activeClassName="nav-selected" to="/photos">
          Фотографії
        </NavLink>
        <NavLink className="navigation" activeClassName="nav-selected" to="/contacts">
          Контакти
        </NavLink>
      </div>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/posts" component={Posts} />
        <Route path="/photos" component={Photos} />
        <Route path="/contacts" component={Contacts} exact/>
        <Route path={'/contacts/:id'} component={ContactSingle} />
        <Route path={'/'} component={Main} exact />
      </Switch>
    </Router>
  );
}

export default App;
