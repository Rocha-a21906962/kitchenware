import Calendar from "../calendar/Calendar";

const MealPlanningCalendar = ({
    mealPlanning,
    setMealPlanning,
    selectedDay,
    setSelectedDay
}) => {
    return (
        <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            calendarType="meal_planning"
            dataState={mealPlanning}
            setDataState={setMealPlanning} />
    )
}

export default MealPlanningCalendar;