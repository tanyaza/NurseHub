import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrderItem } from '../states/orderSlice';
import styled from 'styled-components';
import { hide, showSuccess } from '../states/toastSlice';

const Card = ({ id, title, description, price, img, imgAlt = '' }) => {

    const dispatch = useDispatch()

    return (
        <CardElement>
            <CardImage>
                <img alt={imgAlt} src={img}></img>
            </CardImage>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <h3>{price} ریال</h3>
            <CardButton>
                <li onClick={() => { dispatch(hide()); dispatch(addOrderItem({ id, title, price })); dispatch(showSuccess('خدمت به سبد خرید شما اضافه شد')); }}>افزودن</li>
            </CardButton>
        </CardElement >
    )
}



const CardElement = styled.div`
    width: calc(25% - 10px);
    max-width: 250px;
    min-width: 200px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    background-color: purple;

    h3 {
        font-size: 20px;
        color: #ffff;
        font-weight: 100;
        margin-bottom: 20px;
    }
    
    h4 {
        font-size: 16px;
        color: #ffff;
        font-weight: 100;
        margin-bottom: 20px;
    }
`;

const CardImage = styled.div`
    width: 45px;
    height: 45px;
    margin-bottom: 5px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const CardButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(4px);
        border-radius: 20px;
        color: #ffff;
        border: transparent;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3;
        text-decoration: none;
      }

      a:hover {
        background: rgba(255, 255, 255, 0.4);
      }
`;

export default Card;

