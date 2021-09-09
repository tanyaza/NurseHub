import React from 'react';
import Header from './DashboardHeader/Header';
import Footer from './DashboardFooter/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './DashboardLayoutRTL.css';


import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

const DashboardLayout = ({ children }) => {

    return (

        <BootstrapProvider theme={{ '$body-bg': 'grey', '$body-color': 'lightgrey' }}>
            <Header />
            { children}
            <Footer />
        </BootstrapProvider>
    );
};

export default DashboardLayout;