import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

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
/* temporary (just for testing) */
import IngredientList from './pages/IngredientList.js';
import Ingredient from './pages/Ingredient.js';
import IngredientStats from './pages/IngredientStats.js';
import RecipeList from './pages/RecipeList.js';
import Recipe from './pages/Recipe.js';
import RecipeStats from './pages/RecipeStats.js';
import IngredientCategoriesPage from "./pages/IngredientCategories";
import RecipeCategoriesPage from "./pages/RecipeCategories";

import meal_planning from './data/meal_planning';
import order_planning from './data/orders';

function App() {

  const [mealPlanning, setMealPlanning] = useState(meal_planning());
  const [orders, setOrders] = useState(order_planning());

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
          <Orders
              orders={orders}
              setOrders={setOrders}/>
        </Route>
        <Route path="/meals_and_events" exact>
          <MealsAndEvents 
              mealPlanning={mealPlanning}
              setMealPlanning={setMealPlanning}/>
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
        <Route path="/ingredient_category" exact>
          <IngredientList 
              stats={false} />
        </Route>
        <Route path="/ingredient_category_stats" exact>
          <IngredientList 
              stats={true} />
        </Route>
        <Route path="/ingredient" exact>
          <Ingredient />
        </Route>
        <Route path="/ingredient_stats" exact>
          <IngredientStats />
        </Route>
        <Route path="/recipe_category" exact>
          <RecipeList 
              stats={false} />
        </Route>
        <Route path="/recipe_category_stats" exact>
          <RecipeList 
              stats={true} />
        </Route>
        <Route path="/recipe" exact>
          <Recipe />
        </Route>
        <Route path="/recipe_stats" exact>
          <RecipeStats />
        </Route>
        <Route path="/most_used_ingredients" exact>
          <IngredientList 
              stats={true} />
        </Route>
        <Route path="/individual_ingredient_stats" exact>
          <IngredientCategoriesPage 
              stats={true} />
        </Route>
        <Route path="/most_used_recipes" exact>
          <RecipeList 
              stats={true} />
        </Route>
        <Route path="/individual_recipe_stats" exact>
          <RecipeCategoriesPage 
              stats={true} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
