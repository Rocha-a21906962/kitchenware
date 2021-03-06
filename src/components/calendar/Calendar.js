import { useState } from "react";
import React from "react";
import styled from "styled-components";
import GlobalCalendarStyles from "../GlobalCalendarStyles.js";
import { format, parseISO, addDays, addMonths, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameMonth, isSameDay } from "date-fns";
import { Icon } from '@iconify/react';
import formPrevious from '@iconify-icons/grommet-icons/form-previous';
import formNext from '@iconify-icons/grommet-icons/form-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck} from '@fortawesome/free-solid-svg-icons';
// import potOfFood from '@iconify/icons-emojione-monotone/shallow-pan-of-food';
import bxsDish from '@iconify-icons/bx/bxs-dish';



/* bogus recipe data */
const months = [
  {
      name: 'january',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'february',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'march',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'april',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'may',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'june',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'july',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'august',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'september',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'october',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'november',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
  {
      name: 'december',
      image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
  },
];



const Calendar = ({
    selectedDay, 
    setSelectedDay,
    calendarType,
    dataState,
    setDataState
}) => {
    
    const [currentMonth, setCurrentMonth] = useState(selectedDay);

    const renderHeader = () => {
        const monthFormat = "MMMM";
        const yearFormat = "yyyy";
        
        console.log(dataState);
        console.log(selectedDay);
        console.log(currentMonth);

        return (
          <div className="calendar_header row flex-middle">
            <div className="gradient_overlay"></div>
            <img src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4" alt="month image"/>
            <div className="col col-start">
              <div className="icon prev" onClick={prevMonth}>
                <Icon icon={formPrevious} />
              </div>
            </div>
            <div className="col col-center month">
              <span>{format(currentMonth, monthFormat)}</span>
              <span> {format(currentMonth, yearFormat)}</span>
            </div>
            <div className="col col-end">
              <div className="icon next" onClick={nextMonth}>
                <Icon icon={formNext} /></div>
            </div>
          </div>
        );
    }

    const renderDays = () => {
        const dateFormat = "iiii";
        const days = [];
    
        let startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {format(addDays(startDate, i), dateFormat)}
            </div>
          );
        }
    
        return <div className="days row">{days}</div>;
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
    
        const dateFormat = "d";
        const rows = [];
    
        let days = [];
        let day = startDate;
        let formattedDate = "";
  
        while (day <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
              <div
                className={`col cell ${
                  !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSameDay(day, selectedDay) ? "selected" : ""
                }`}
                key={day}
                onClick={() => {onDateClick(cloneDay)}}
              >
                {calendarType === "orders"
                ?
                orderThisDay(day) ? <FontAwesomeIcon icon={faTruck} /> : ''
                :
                plannedMealsThisDay(day) > 0 ? <div className="nr_meals"><Icon icon={bxsDish} />{plannedMealsThisDay(day)}</div> : ''
                }
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
              </div>
            );
            day = addDays(day, 1);
          }
          rows.push(
            <div className="row" key={day}>
              {days}
            </div>
          );
          days = [];
        }
        return <div className="calendar_body">
          {rows}
        </div>;

    }

    const onDateClick = day => {
        setSelectedDay(day);
        // this.setState({
        //   selectedDate: day
        // });
        // console.log(day);
    };
  
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
        // this.setState({
        //   currentMonth: addMonths(this.state.currentMonth, 1)
        // });
    };
  
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
        // this.setState({
        //   currentMonth: subMonths(this.state.currentMonth, 1)
        // });
    };

    const orderThisDay = day => {
      const ordersThisDay = dataState.filter(order => order.day === format(day, 'd') 
                                          && order.month === format(day, 'M')
                                          && order.year === format(day, 'Y'));
      console.log(day);
      console.log(format(day, 'M'));
      console.log(ordersThisDay);
      console.log(ordersThisDay.length > 0);
      return (ordersThisDay.length > 0);
    };

    const plannedMealsThisDay = day => {
      const mealsThisDay = dataState.filter(date => date.day === format(day, 'd') 
                                                && date.month === format(day, 'M')
                                                && date.year === format(day, 'Y'));
                                             
      const nr_meals = (mealsThisDay.length === 1) ? mealsThisDay[0].meals : '0';
      console.log(nr_meals);
      return nr_meals;
    };

    return (
      <div>
          <GlobalCalendarStyles />
          <div className="calendar">
              {renderHeader()}
              {renderDays()}
              {renderCells()}
          </div>
      </div>
    );
}

// class Calendar extends React.Component {
//     state = {
//       currentMonth: new Date(),
//       selectedDate: new Date()
//     };
  
//     renderHeader() {
//       const monthFormat = "MMMM";
//       const yearFormat = "yyyy";
  
//       return (
//         <div className="calendar_header row flex-middle">
//           <div className="gradient_overlay"></div>
//           <img src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4" alt="month image"/>
//           <div className="col col-start">
//             <div className="icon prev" onClick={this.prevMonth}>
//               <Icon icon={formPrevious} />
//             </div>
//           </div>
//           <div className="col col-center month">
//             <span>{format(this.state.currentMonth, monthFormat)}</span>
//             <span> {format(this.state.currentMonth, yearFormat)}</span>
//           </div>
//           <div className="col col-end">
//             <div className="icon next" onClick={this.nextMonth}>
//               <Icon icon={formNext} /></div>
//           </div>
//         </div>
//       );
//     }
  
//     renderDays() {
//       const dateFormat = "iiii";
//       const days = [];
  
//       let startDate = startOfWeek(this.state.currentMonth);
  
//       for (let i = 0; i < 7; i++) {
//         days.push(
//           <div className="col col-center" key={i}>
//             {format(addDays(startDate, i), dateFormat)}
//           </div>
//         );
//       }
  
//       return <div className="days row">{days}</div>;
//     }
  
//     renderCells() {
//       const { currentMonth, selectedDate } = this.state;
//       const monthStart = startOfMonth(currentMonth);
//       const monthEnd = endOfMonth(monthStart);
//       const startDate = startOfWeek(monthStart);
//       const endDate = endOfWeek(monthEnd);
  
//       const dateFormat = "d";
//       const rows = [];
  
//       let days = [];
//       let day = startDate;
//       let formattedDate = "";
  
//       while (day <= endDate) {
//         for (let i = 0; i < 7; i++) {
//           formattedDate = format(day, dateFormat);
//           const cloneDay = day;
//           days.push(
//             <div
//               className={`col cell ${
//                 !isSameMonth(day, monthStart)
//                   ? "disabled"
//                   : isSameDay(day, selectedDate) ? "selected" : ""
//               }`}
//               key={day}
//               onClick={() => {this.onDateClick(cloneDay)}}
//             >
//               <span className="number">{formattedDate}</span>
//               <span className="bg">{formattedDate}</span>
//             </div>
//           );
//           day = addDays(day, 1);
//         }
//         rows.push(
//           <div className="row" key={day}>
//             {days}
//           </div>
//         );
//         days = [];
//       }
//       return <div className="calendar_body">{rows}</div>;
//     }
  
//     onDateClick = day => {
//       this.setState({
//         selectedDate: day
//       });
//       // console.log(day);
//     };
  
//     nextMonth = () => {
//       this.setState({
//         currentMonth: addMonths(this.state.currentMonth, 1)
//       });
//     };
  
//     prevMonth = () => {
//       this.setState({
//         currentMonth: subMonths(this.state.currentMonth, 1)
//       });
//     };
  
//     render() {
//       return (
//         <div>
//             <GlobalCalendarStyles />
//             <div className="calendar">
//                 {this.renderHeader()}
//                 {this.renderDays()}
//                 {this.renderCells()}
//             </div>
//         </div>
//       );
//     }
//   }

  
const StyledCalendar = styled.div`

`

const StyledContentHeader = styled.div`
    position: relative;
    width: calc(100vw - 10rem); // 100%;
    height: 15vh;
    img {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }
    .gradient_overlay {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        // background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6+ */
        background: linear-gradient(to bottom,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 50%,rgba(0,0,0,0.95) 100%); /* W3C */
        z-index: 3;
    }
    .ingredient_name {
        position: absolute;
        left: 0;
        top: 50%;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 5;
        h2 {
            padding-left: 2.5rem;
            display: block;
            font-size: 1.5rem;
            color: #b1b1b1;
        }
        span {
            font-size: 3rem;
            font-style: normal;
            color: white;
            text-transform: capitalize;
        }
    }
`
  
  export default Calendar;


  