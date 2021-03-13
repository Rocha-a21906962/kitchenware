import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyles from "./components/GlobalStyles.js";
import Nav from './components/Nav.js';
import SideNav from './components/SideNav.js';
import Alerts from './components/Alerts.js';
import EventPopup from './components/EventPopup.js';
import SearchPage from './components/search/SearchPage.js';
import Dashboard from './pages/Dashboard.js';
import RecipeFeed from './pages/RecipeFeed.js';
import DeviceManagement from './pages/DeviceManagement.js';
import Pantry from './pages/Pantry.js';
import ToolManagement from './pages/ToolManagement.js';
import Stats from './pages/Stats.js';
import Orders from './pages/Orders.js';
import MealsAndEvents from './pages/MealsAndEvents.js';
import About from './pages/About.js';
import Settings from './pages/Settings.js';
import Favourites from './pages/Favourites.js';

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
import ingredient_categories from './data/ingredient_categories';
import ingredients from './data/ingredients';
import recipe_categories from './data/recipe_categories';
import recipes from './data/recipes';
import ScrollToTop from './components/ScrollToTop.js';

/* import for feed test */
import Feed from './components/feed/Feed.js';


function App() {

  /* Hooks for all kinds of data that can be mutated by the user */
  const [mealPlanning, setMealPlanning] = useState(meal_planning());
  const [orders, setOrders] = useState(order_planning());
  const [ingredientData, setIngredientData] = useState(ingredients());
  const [recipeData, setRecipeData] = useState(recipes());

  /* We don't want the categories to mutate! */
  const ingredientCategories = ingredient_categories();
  const recipeCategories = recipe_categories();

  /* Hook for search page visibility */
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false);

  /* Hook for the search string */
  const [searchString, setSearchString] = useState(null);

  /* Hooks for the event popup */
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const [eventPopupMessage, setEventPopupMessage] = useState(null);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav
          isSearchPageVisible={isSearchPageVisible}
          setIsSearchPageVisible={setIsSearchPageVisible}
          searchString={searchString}
          setSearchString={setSearchString} />
      <SideNav />
      <Alerts 
          ingredientData={ingredientData}
          setIngredientData={setIngredientData} 
          recipeData={recipeData}
          setRecipeData={setRecipeData}
          mealPlanning={mealPlanning}
          setMealPlanning={setMealPlanning}
          orders={orders}
          setOrders={setOrders}
          />
      <SearchPage
          isSearchPageVisible={isSearchPageVisible}
          setIsSearchPageVisible={setIsSearchPageVisible}
          searchString={searchString}
          setSearchString={setSearchString}
          ingredientData={ingredientData}
          setIngredientData={setIngredientData} 
          ingredientCategories={ingredientCategories}
          recipeData={recipeData}
          setRecipeData={setRecipeData}
          recipeCategories={recipeCategories}
          orders={orders} />
      <EventPopup
          isEventPopupOpen={isEventPopupOpen}
          setIsEventPopupOpen={setIsEventPopupOpen}
          eventPopupMessage={eventPopupMessage}
          setEventPopupMessage={setEventPopupMessage} />
      <ScrollToTop>
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
            <Pantry
                ingredientData={ingredientData}
                setIngredientData={setIngredientData}
                ingredientCategories={ingredientCategories} />
          </Route>
          <Route path="/recipe_feed" exact>
            <RecipeFeed
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories} />
          </Route>
          <Route path="/orders" exact>
            <Orders
                orders={orders}
                setOrders={setOrders}
                /* the following line must be changed */
                orderData={ingredientData}
                ingredientData={ingredientData}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
          </Route>
          <Route path="/meals_and_events" exact>
            <MealsAndEvents 
                mealPlanning={mealPlanning}
                setMealPlanning={setMealPlanning}
                mealPlanningData={recipeData} />
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
          {/* <Route path="/search" exact>
            <SearchPage />
          </Route> */}
          <Route path="/favourites" exact>
            <Favourites 
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}/>
          </Route>
          {/*
          <Route path="/profile" exact>
            <Profile />
          </Route>
          */}
          <Route path="/ingredient_category/:category_name" exact>
            <IngredientList
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} 
                ingredientCategories={ingredientCategories}
                stats={false} />
          </Route>
          <Route path="/ingredient_category_stats/:category_name" exact>
            <IngredientList
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} 
                ingredientCategories={ingredientCategories}
                stats={true} />
          </Route>
          <Route path="/ingredient/:ingredient_name" exact>
            <Ingredient
                ingredientData={ingredientData}
                setIngredientData={setIngredientData}
                ingredientCategories={ingredientCategories}
                orders={orders}
                setOrders={setOrders}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
          </Route>
          <Route path="/ingredient_stats/:ingredient_name" exact>
            <IngredientStats
                ingredientData={ingredientData}
                setIngredientData={setIngredientData}
                ingredientCategories={ingredientCategories}
                recipeData={recipeData}
                orders={orders} />
          </Route>
          <Route path="/recipe_category/:category_name" exact>
            <RecipeList 
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                stats={false} />
          </Route>
          <Route path="/recipe_category_stats/:category_name" exact>
            <RecipeList 
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                stats={true} />
          </Route>
          <Route path="/recipe/:recipe_name" exact>
            <Recipe
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                ingredientData={ingredientData}
                orders={orders}
                setOrders={setOrders}
                isEventPopupOpen={isEventPopupOpen}
                setIsEventPopupOpen={setIsEventPopupOpen}
                eventPopupMessage={eventPopupMessage}
                setEventPopupMessage={setEventPopupMessage} />
          </Route>
          <Route path="/recipe_stats/:recipe_name" exact>
            <RecipeStats
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} />
          </Route>
          <Route path="/most_used_ingredients" exact>
            <IngredientList
                ingredientData={ingredientData}
                setIngredientData={setIngredientData} 
                ingredientCategories={ingredientCategories}
                stats={true} />
          </Route>
          <Route path="/individual_ingredient_stats" exact>
            <IngredientCategoriesPage
                ingredientData={ingredientData}
                setIngredientData={setIngredientData}
                ingredientCategories={ingredientCategories} 
                stats={true} />
          </Route>
          <Route path="/most_used_recipes" exact>
            <RecipeList 
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                stats={true} />
          </Route>
          <Route path="/individual_recipe_stats" exact>
            <RecipeCategoriesPage 
                recipeData={recipeData}
                setRecipeData={setRecipeData}
                recipeCategories={recipeCategories}
                stats={true} />
          </Route>
          {/* test route */}
          <Route path="/feed" exact>
            <div className="content">
              <Feed 
                ingredientData={ingredientData}
                recipeData={recipeData}
                recipeCategories={recipeCategories} />
            </div>
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
