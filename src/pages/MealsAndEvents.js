import { useState } from "react";

import MealPlanningCalendar from "../components/meal_planning/MealPlanningCalendar";
import SideContext from "../components/meal_planning/SideContext";
import BottomContext from "../components/meal_planning/BottomContext";
import MealDetail from "../components/meal_planning/MealDetail";
import NewMeal from "../components/meal_planning/NewMeal";


const MealsAndEvents = ({
    mealPlanning,
    setMealPlanning,
    mealPlanningData
}) => {

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [isMealDetailOpen, setIsMealDetailOpen] = useState(null);
    const [isNewMealOpen, setIsNewMealOpen] = useState(null);

    return (
        <div className="content">
            <MealPlanningCalendar
                mealPlanning={mealPlanning}
                setMealPlanning={setMealPlanning}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay} />
            <BottomContext 
                mealPlanningData={mealPlanningData} />
            <SideContext
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                isMealDetailOpen={isMealDetailOpen}
                setIsMealDetailOpen={setIsMealDetailOpen}
                isNewMealOpen={isNewMealOpen}
                setIsNewMealOpen={setIsNewMealOpen} />
            <MealDetail
                isMealDetailOpen={isMealDetailOpen}
                setIsMealDetailOpen={setIsMealDetailOpen} />
            <NewMeal
                isNewMealOpen={isNewMealOpen}
                setIsNewMealOpen={setIsNewMealOpen} />
        </div>
    )
}

export default MealsAndEvents;