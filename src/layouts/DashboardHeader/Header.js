// import React from 'react';
// import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
import "./Header.css";

import React, { useState } from "react";

const Header = () => {
	const [isOpen, setOpen] = useState();

	return (
		<div class="nav">
			<img alt="Logo" src="/images/Design studio logo 1.png" />
		</div>
		// <Navbar color="faded" light toggleable="lg">
		// </Navbar>
	);
};

export default Header;
