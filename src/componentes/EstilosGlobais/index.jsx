import { createGlobalStyle } from 'styled-components';
import SourceSansProBlack from './SourceSansPro-Black.otf';
import SourceSansProBold from './SourceSansPro-Bold.otf';
import SourceSansProSemiBold from './SourceSansPro-Semibold.otf';
import SourceSansProRegular from './SourceSansPro-Regular.otf';

const EstilosGlobais = createGlobalStyle`

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProRegular}) format('otf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProBlack}) format('otf');
        font-weight: black;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProBold}) format('otf');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro';
        src: url(${SourceSansProSemiBold}) format('otf');
        font-weight: 500;
        font-style: normal;
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #262626; 
  }

  button {
    font-family: 'SourceSansPro', sans-serif;
  }

  form {
    font-family: 'SourceSansPro', sans-serif;
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    height: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(34, 113, 209, 0.17);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #2271D1; 
    border-radius: 10px;
    border: 3px solid rgba(34, 113, 209, 0.17);
    max-width: 50px;
  }
`;

export default EstilosGlobais;
