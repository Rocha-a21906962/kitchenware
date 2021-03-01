import MealPlanningCalendar from "../components/meal_planning/MealPlanningCalendar";
import SideContext from "../components/meal_planning/SideContext";


const MealsAndEvents = () => {
    return (
        <div className="content">
            <MealPlanningCalendar />
            <SideContext />
        </div>
    )
}

export default MealsAndEvents;