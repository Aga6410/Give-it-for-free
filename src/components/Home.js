import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeTitle from "./HomeTitle";
import HomeThreeColumns from "./HomeThreeColumns"
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs.js";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import OrganizationsList from './OrganizationsList';
import PaginationApp from "./PaginationApp"


const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeTitle/>
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            {/* <HomeOrganizations /> */}
            <OrganizationsList/>
            {/* <PaginationApp/> */}
            <HomeContact />
            <HomeFooter/>
        </>
    );
};

export default Home;

