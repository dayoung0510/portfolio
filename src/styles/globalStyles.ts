import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`

${reset};

/* fonts */
@font-face {
  font-family: "Pret";
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff")
    format("woff");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Pret";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Pret";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
    format("woff");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'Dung';
  src: url('/fonts/DungGeunMo.woff2') format('woff2'),
    url('/fonts/DungGeunMo.woff') format('woff'),
    url('/fonts/DungGeunMo.eot') format('eot');
  font-weight: 400;
  font-style: normal;
}


html,body{
  width:100%;
  height:100%;

  font-size: 18px;

  @media ${({ theme }) => theme.device.mobile} {
      font-size: 18px;
  }
}

* {
    box-sizing: border-box;
  }
  body {
    font-family: "Dung", "Pret", Arial, sans-serif;
  }


  /* button */
  button {
    outline: 0;
    border: 0;
    cursor:pointer;
    font-family:'pret';
    padding: 0;
    margin:0;
    background:none;
  }


`

export default GlobalStyles
