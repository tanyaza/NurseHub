import React, { useEffect, useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { selectToastVisiblity, hide } from '../states/toastSlice';

const Toast = () => {

    const [isVisible, message, color] = useSelector(selectToastVisiblity);
    const [isShow, setShow] = useState(false);
    const [toastMessage, setMessage] = useState('');
    const dispatch = useDispatch();

    const hideToaster = useCallback(() => {
        setMessage('');
        setShow(false);        
    }, []);

    const showToaster = useCallback((message, isVisible) => {
        setMessage(message);
        setShow(isVisible);
        setTimeout(() => dispatch(hide()), 4150);
    }, [dispatch]);

    useEffect(() => {

        if (isVisible)
            showToaster(message, isVisible);
        else 
            hideToaster();

    }, [isVisible, message, showToaster, hideToaster])

    return (
        <SnackBar color={color} show={isShow}>
            {toastMessage}
        </SnackBar>
    );
};

const SnackBar = styled.div`
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;

    ${props => props.color && css`
        background-color: ${props.color};
    `}

    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 10%;
    bottom: 30px;
    font-size: 17px;

    ${props => props.show && css`
        visibility: visible;
        -webkit-animation: ${ToastFadeIn} 0.5s, ${ToastFadeOut} 0.5s 4.1s;
        animation: ${ToastFadeIn} 0.5s, ${ToastFadeOut} 0.5s 4.1s;
    `}

`;

const ToastFadeIn = keyframes`
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
`;

const ToastFadeOut = keyframes`
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
`;

export default Toast;