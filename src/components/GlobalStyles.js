import { createGlobalStyle } from "styled-components";

import GTAmericaRegularTtf from '../fonts/GTAmericaRegular/GTAmericaRegular.ttf';
import MuseoModerno from '../fonts/MuseoModerno-VariableFont_wght.ttf'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'GTAmericaRegular';
        src: local('GTAmericaRegular'),
        url(${GTAmericaRegularTtf}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'MuseoModerno';
        src: local('MuseoModerno'),
        url(${MuseoModerno}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box; 
    }

    body {
        font-family: 'Inter',sans-serif;
        // background: linear-gradient(135deg, rgb(179,187,207),  #373737);
        // background: linear-gradient(155deg, rgb(255 255 255), #848484);
        // background-color: #050d33;
        background-image: url("ting-tian.jpg");
        background-size: cover;
        background-position: center;
        // background-color: #ffffff;
        // background-color: #1b1b1b;
        height: 100%;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background-color: transparent;
        color: white;
        transition: all 0.5 ease;
        &:hover {
            background-color: #23d997;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: white;
    }

    h4 {
        font-size: 2rem;
        font-weight: bold; 
    }

    span{
        font-weight: bold;
        color: #23d997;
    }

    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
        letter-spacing: 2px; /* Filipe */
    }

    .content,
    .search_page {
        position: absolute;
        top: 10vh;
        left: 10rem;
        width: calc(100vw - 10rem);
        min-height: calc(90vh);
        display: flex;
        overflow-y: auto;
        // border: 1px solid green;
        // border-top-left-radius: 1.5rem;
        background: linear-gradient(to bottom right,#17171766 5%,#13152f66 65%,#10141b66 100%); /* W3C */
    }

    #order_detail_popup,
    #new_order_popup,
    #meal_detail_popup,
    #new_meal_popup {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        height: 90vh;
        width: 24vw;
        opacity: 0;
        transform: translateY(-90vh);
        // transform: translateX(30vw);
        transition: transform 0.3s ease, opacity 0.3s ease;
        &.open {
            transform: none;
            opacity: 1;
        }
    }

    .hide_favourite_button,
    .hide_search_target_filter {
        display: none;
    }

    .search_page {
        position: absolute;
        width: 100%;
        max-width: calc(100vw - 10rem);
        min-height: calc(100vh - 10vh);
        opacity: 0.5;
        transform: translateY(-200%);
        transition: transform 1s ease, opacity 1.2s ease;
        background-color: #000000fa;
        z-index: 999;
        .result_list {
            width: 65vw;
        }
        .search_filters {
            width: calc(100vw - 65vw - 10rem);
        }
        /*
        select {
            text-align-last: center;
            padding-right: 1rem;
            width: 15%;
            height: 100%;
            background-color: #111111;
            color: #b1b1b1;
            border-style: none;
        }
        */
        input {
            padding-left: 1rem;
            width: 100%;
            height: 100%;
            background-color: #1c1c1c;
            // background-color: #050c2c;
            color: #b1b1b1;
            border-style: none;
        }
        &.open {
            opacity: 1;
            transform: none;
            transition: transform 0.5s ease, opacity 0.5s ease;
        }
    }

    .step_by_step_overlay {
        position: fixed;
        display: flex;
        flex-direction: column;
        margin: 2vw;
        width: 95vw;
        max-width: calc(95vw - 10rem);
        min-height: calc(80vh - 10vh);
        max-height: calc(80vh - 10vh);
        opacity: 0;
        // transform: translateY(-200%);
        transition: opacity 0.5s ease;
        background-color: #000000fa;
        z-index: -1;
        overflow-y: hidden;
        &.open {
            opacity: 1;
            transform: none;
            transition: opacity 0.5s ease;
            z-index: 10;
        }
    }

    .search_filters {
        background-color: #00000077;
        width: 100%;
    }

    .feed {
        position: relative;
        height: 90vh;
        background: #000000dd;
        overflow-x: scroll;
    }
    
    .one_line_feed {
        position: relative;
        height: 22vh;
        background: #000000dd;
        overflow-x: scroll;
        /* temporary hack to fix the feed height on the orders/meal_planning pages */
        overflow-y: hidden;
    }

`

export default GlobalStyles;