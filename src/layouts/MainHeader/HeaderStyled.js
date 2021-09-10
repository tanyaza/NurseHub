import styled, { css } from "styled-components";

const HeaderDiv = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

const Nav = styled.div`
	direction: rtl;
	display: flex;
	padding: 20px;
	height: 70px;
	background: transparent;
	margin-bottom: 50px;
`;

const NavContainer = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 50px;
		margin-left: 20px;
	}
	a {
		color: #fff;
		text-decoration: none;
	}

	${(props) =>
		props.left &&
		css`
			margin-right: auto;
		`}
`;

const NavLink = styled.li`
	list-style: none;
	margin-left: 20px;
	padding: 10px;
	border-radius: 20px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) =>
		props.active &&
		css`
			background: rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(20px);
		`}
	a {
		color: #ffff;
		text-decoration: none;
		font-size: 18px;
	}
`;

const NavButtonContainer = styled.div`
	margin-right: 30px;
	display: flex;
	align-items: center;
`;

const NavButton = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.31);
	box-shadow: 10px 10px 100px #1c9c92;
	backdrop-filter: blur(20px);
	border-radius: 50px;
	border: 1px solid #b9b9b9;
	margin-left: 20px;
	cursor: pointer;

	img {
		width: 24px;
		margin: auto;
	}
`;

const NavButtonMessage = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -5px;
	right: -15px;
	width: 34px;
	height: 24px;
	border: 1px solid #b9b9b9;
	background: rgba(255, 0, 0, 0.31);
	box-shadow: 10px 10px 100px #1c9c92;
	backdrop-filter: blur(20px);
	border-radius: 50px;

	span {
		font-size: 12px;
		color: #ffff;
	}
`;

const Banner = styled.div`
	width: 100%;
	padding: 2rem 3rem;
	margin: 0 auto;
	direction: rtl;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const BannerInfo = styled.div`
	padding: 30px;
	width: calc(40% - 2rem);
	align-self: flex-start;
	direction: rtl;
	text-align: justify;
	height: auto;
	color: #ffff;
	font-size: 18px;
	display: flex;
	flex-direction: column;

	h3 {
		font-size: 4rem;
		font-family: Anjoman;
		margin-top: 10px;
		font-weight: 100;
		margin-bottom: 50px;
	}

	button {
		align-self: right;
		font-size: 18px;
		text-align: center;
		width: 200px;
		background: linear-gradient(94.97deg, #ff0000 -130.13%, #c750ff 129.4%);
		border-radius: 30px;
		border: transparent;
		padding: 10px 30px;
		cursor: pointer;
		color: #fff;
		text-decoration: none;
	}
	a {
		color: #fff;
		text-decoration: none;
	}

	p {
		font-size: 18px;
		font-family: Anjoman;
		font-weight: 100;
		margin-bottom: 40px;
		line-height: 1.6;
	}
`;

const BannerImage = styled.div`
	width: 50%;
	max-width: 860px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export {
	HeaderDiv,
	Nav,
	NavContainer,
	NavLink,
	NavButtonContainer,
	NavButton,
	NavButtonMessage,
	Banner,
	BannerInfo,
	BannerImage,
};
