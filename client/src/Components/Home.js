import React from 'react'
import Footer from './Shared/Footer';
import BankAndDonor from './Shared/BankAndDonor';
import Features from './Shared/Features';
import AboutBloodDonor from './Shared/AboutBloodDonor';

export const Home = () => {
  return (
    <React.StrictMode>
        <BankAndDonor />
        <Features />
        <AboutBloodDonor />
    </React.StrictMode>
  );
}

export default Home;