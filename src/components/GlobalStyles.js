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

    .content {
        position: absolute;
        top: 10vh;
        left: 10rem;
        display: flex;
        overflow-y: auto;
        // border: 1px solid green;
    }
`

export default GlobalStyles;