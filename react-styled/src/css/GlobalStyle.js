import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: aliceblue;
        --black: rgba(44, 44, 44, 0);
        --text-color:var(--black);
        --header-font-weight: 700;
        --orange: orange;
    }
`;

export default GlobalStyle;