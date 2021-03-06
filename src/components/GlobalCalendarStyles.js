import { createGlobalStyle } from "styled-components";

const GlobalCalendarStyles = createGlobalStyle`
    
    /* FONT IMPORTS */

    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

    .icon {
        font-family: 'Material Icons', serif;
        font-style: normal;
        display: inline-block;
        vertical-align: middle;
        line-height: 2rem;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga';
    }

    /* VARIABLES */

    :root {
        --main-color: #1a8fff;
        --text-color: #777;
        --text-color-light: #ccc;
        --border-color: #eee;
        --bg-color: #f9f9f9;
        --neutral-color: #a5822a44;
    }


    /* GENERAL */

    * {
    box-sizing: border-box;
    }
    .calendar_body {
        font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        font-size: 1em;
        font-weight: 300;
        line-height: 1.5;
        color: var(--text-color);
        background: var(--bg-color);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .calendar_header {
        display: block;
        width: 100%;
        padding: 1.75em 0;
        border-bottom: 1px solid var(--border-color);
        background: var(--neutral-color);
    }

    .calendar_header #logo {
        font-size: 175%;
        text-align: center;
        color: var(--main-color);
        line-height: 1;
    }

    .calendar_header #logo .icon {
        padding-right: .25em;
    }
/*
    main {
        display: block;
        margin: 0 auto;
        margin-top: 5em;
        max-width: 50em;
    }
*/

    /* GRID */

    .row {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    .row-middle {
        align-items: center;
    }

    .col {
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
    }

    .col-start {
        justify-content: flex-start;
        text-align: left;
    }

    .col-center {
        justify-content: center;
        text-align: center;
    }

    .col-end {
        justify-content: flex-end;
        text-align: right;
    }


    /* Calendar */

    .calendar {
        display: block;
        position: relative;
        width: 60vw;
        background: var(--neutral-color);
        // border: 1px solid var(--border-color);
    }

    .calendar .calendar_header {
        position: relative;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 115%;
        padding: 1.5em 0;
        // border-bottom: 1px solid var(--border-color);
        border: none;
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
        .col {
            z-index: 5;
        }
        .icon {
            display: flex;
            color: white;
            font-size: 2rem;
            justify-content: flex-end;
            &.prev {
                justify-content: flex-end;
            }
            &.next {
                justify-content: flex-start;
            }
        }
    }

    .calendar .calendar_header .icon {
    cursor: pointer;
        transition: .15s ease-out;
    }

    .calendar .calendar_header .icon:hover {
        // transform: scale(1.75);
        transition: .25s ease-out;
        color: var(--main-color);
    }

    .calendar .calendar_header .icon:first-of-type {
        margin-left: 1em;
    }

    .calendar .calendar_header .icon:last-of-type {
        margin-right: 1em;
    }

    .calendar .days {
        text-transform: uppercase;
        font-weight: 400;
        color: var(--text-color-light);
        font-size: 0.5rem;
        padding: .75em 0;
        // border-bottom: 1px solid var(--border-color);
        background-color: #000000ee;
    }

    .calendar .calendar_body .cell {
        position: relative;
        height: 6rem;
        // border-right: 1px solid var(--border-color);
        overflow: hidden;
        cursor: pointer;
        background: var(--neutral-color);
        transition: 0.25s ease-out;
        /**/
        border: 1px solid #a52a2a11;
    }

    .calendar .calendar_body .cell:hover {
        // background: var(--bg-color);
        background-color: #a5822aaa;
        transition: 0.5s ease-out;
    }

    .calendar .calendar_body .selected {
        // border-left: 10px solid transparent;
        border-image: linear-gradient(45deg, #1a8fff 0%,#53cbf1 40%);
        border-image-slice: 1;
    }

    .calendar .calendar_body .row {
        // border-bottom: 1px solid var(--border-color);
    }

    .calendar .calendar_body .row:last-child {
        border-bottom: none;
    }

    .calendar .calendar_body .cell:last-child {
        border-right: none;
    }

    .calendar .calendar_body .cell .number {
        position: absolute;
        font-size: 0.75rem;
        line-height: 1;
        top: .25rem;
        left: .25rem;
        font-weight: 700;
        /* */
        color: brown;
    }

    .calendar .calendar_body .disabled {
        color: var(--text-color-light);
        pointer-events: none;
        /* */
        background-color: #a5822a66;
        &span {
            color: #a5822a44;
        }
    }

    .calendar .calendar_body .cell .bg {
        font-weight: 700;
        line-height: 1;
        color: #a5822a;
        opacity: 0;
        font-size: 5rem;
        position: absolute;
        bottom: -.2rem;
        right: -.05rem;
        transition: .25s ease-out;
        letter-spacing: -.07em;
    }

    .calendar .calendar_body .cell:hover .bg, .calendar .calendar_body .selected .bg  {
        opacity: 0.10;
        transition: .5s ease-in;
    }

    .calendar .calendar_body .col {
        flex-grow: 0;
        flex-basis: calc(100%/7);
        width: calc(100%/7);
    }

    /* CUSTOM */

    .month {
        white-space: nowrap;
        span {
            text-decoration: none;
            color: white;
        }
    }

    .calendar .calendar_body .cell svg {
        position: absolute;
        top: calc(50% - 1.25rem/2);
        left: calc(50% - 1.25rem/2);
        font-size: 1.25rem;
        line-height: 1;
        font-weight: 700;
        /* */
        color: #a5822abb;
    }

    .calendar .calendar_body .cell .nr_meals {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #a24d0c;
        // font-family: GTAmericaRegular;
        font-size: 0.75rem;
        font-weight: 900;
        opacity: 1;
        svg {
            position: absolute;
            top: calc(50% - 2.65rem/2);
            left: calc(50% - 2.5rem/2);
            font-size: 2.5rem;
            line-height: 1;
            /* */
            color: #a5822abb;
            opacity: 0.5;
        }
    }

    .calendar .calendar_body .disabled .number,
    .calendar .calendar_body .disabled .fa-truck,
    .calendar .calendar_body .disabled .nr_meals {
        color: #a5822a44;
        svg {
            color: #a5822a44;
        }
    }

`

export default GlobalCalendarStyles;