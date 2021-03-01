import { Switch, Route } from 'react-router-dom';

import GlobalStyles from "./components/GlobalStyles.js";
import Nav from './components/Nav.js';
import SideNav from './components/SideNav.js';
import AlertBubble from './components/AlertBubble.js';
import Dashboard from './pages/Dashboard.js';
import RecipeFeed from './pages/RecipeFeed.js';
import SearchPage from './pages/SearchPage.js';
import DeviceManagement from './pages/DeviceManagement.js';
import Pantry from './pages/Pantry.js';
import ToolManagement from './pages/ToolManagement.js';
import Stats from './pages/Stats.js';
import Orders from './pages/Orders.js';
import MealsAndEvents from './pages/MealsAndEvents.js';
import About from './pages/About.js';
import Settings from './pages/Settings.js';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <SideNav />
      <AlertBubble />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/device_management" exact>
          <DeviceManagement />
        </Route>
        <Route path="/tool_management" exact>
          <ToolManagement />
        </Route>
        <Route path="/pantry" exact>
          <Pantry />
        </Route>
        <Route path="/recipe_feed" exact>
          <RecipeFeed />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
        <Route path="/meals_and_events" exact>
          <MealsAndEvents />
        </Route>
        <Route path="/stats" exact>
          <Stats />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        {/*
        <Route path="/profile" exact>
          <Profile />
        </Route>
        */}
      </Switch>
    </div>
  );
}

export default App;
