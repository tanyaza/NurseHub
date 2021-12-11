import React from "react";
import Header from "./MainHeader/Header";
import Footer from "./MainFooter/Footer";
import { createGlobalStyle } from "styled-components";

import popins from "../assets/fonts/Poppins-Regular.ttf";

const MainLayout = ({ children }) => {
	const matches = window.matchMedia("(max-width: 500px)").matches;

	return (
		<>
			{matches ? <></> : <Header />}
			<GlobalStyle />
			{children}
			<Footer />
		</>
	);
};

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    direction: rtl;
  }
  @font-face {
    font-family: "Popins";
    src: 
      url(${popins}),
    font-weight: 300  
  }
  body {
    font-family: "Monument";
    background: #0C0E11;
    height: 100vh;
    direction: ltr;
  }
`;

export default MainLayout;
