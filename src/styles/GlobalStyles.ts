import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    -ms-hyphenate-limit-chars, body, #root{
        height: 100%;
    }

    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto'
    }

    button{
        cursor: pointer;
    }

    body{
        width: 100%;
        height: 100vh;
    }
`;