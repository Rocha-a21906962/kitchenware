import Calendar from "../calendar/Calendar";

const MealPlanningCalendar = ({
    mealPlanning,
    setMealPlanning,
    selectedDay,
    setSelectedDay,
    isMealDetailOpen,
    setIsMealDetailOpen,
    isNewMealOpen,
    setIsNewMealOpen
}) => {
    return (
        <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            calendarType="meal_planning"
            dataState={mealPlanning}
            setDataState={setMealPlanning}
            isItemDetailOpen={isMealDetailOpen}
            setIsItemDetailOpen={setIsMealDetailOpen}
            isNewItemOpen={isNewMealOpen}
            setIsNewItemOpen={setIsNewMealOpen} />
    )
}

export default MealPlanningCalendar;