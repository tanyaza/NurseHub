import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import medicalService from '../services/medicalService';
import Loading from '../components/Loading';
import styled from 'styled-components';
import { showSuccess } from '../states/toastSlice';
import { useDispatch } from 'react-redux';
const CardContainer = () => {

    const [data, setData] = useState(null);
    const [isBusy, setBusy] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {

        var configuration = {
            'basePath': 'https://api.nursehub.ir'
        }

        var service = new medicalService(configuration);

        service
            .get()
            .then(data => {
                if (data.hasError) {
                    // todo: toast error
                    data = [];
                    setBusy(false);
                }
                else {
                    setData(data.data);
                    setBusy(false);
                    dispatch(showSuccess('خدمات با موفقیت بارگزاری شد'))
                }
            });
    }, [setBusy, setData, dispatch])


    return (
        <MedicalServiceContainer>
            {
                isBusy ? (<Loading />) : data && data.map((item) =>
                    <Card key={item.id} title={item.title} description={item.description} id={item.id} price={item.price} color='purple-gradient' img='/images/Group.png' />
                )
            }
        </MedicalServiceContainer>
    )

}


const MedicalServiceContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;


export default CardContainer