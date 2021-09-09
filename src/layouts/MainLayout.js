import React from "react";
import Header from "./MainHeader/Header";
import Footer from "./MainFooter/Footer";
import { createGlobalStyle } from "styled-components";
import Toast from "../components/Toast";

import BYekanWOFF2 from "../fonts/BYekan.woff2";
import BYekanWOFF from "../fonts/BYekan.woff";
import BYekanTTF from "../fonts/BYekan.ttf";

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			<GlobalStyle />
			{children}
			<Toast />
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
    font-family: "BYekan";
    src: 
      url(${BYekanWOFF2}) format('woff2'),
      url(${BYekanWOFF}) format('woff'),
      url(${BYekanTTF}) format('woff');
  }
  body {
    font-family: "BYekan";
    background: linear-gradient(106.57deg, #373D53 0%, #252634 100%);
    height: 100vh;
  }
`;

export default MainLayout;
