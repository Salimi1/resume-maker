//Components
import Navbar from "./Navbar";
import Header from ".//Header";
import VorlagenInHome from "./VorlagenInHome";
import Vorteilen from ".//Vorteilen";
import Footer from ".//Footer";
import Bewertungen from ".//Bewertungen";

import React from 'react';

const Home = () => {
    return (
        <div className="mt-5 mt-md-0" style={{backgroundImage: 'url(https://imagizer.imageshack.com/img924/9695/Czr9ke.png)'}}>
            <Navbar />
            <Header />
            <VorlagenInHome />
            <Vorteilen />
            <Bewertungen />
            <Footer />
        </div>
    );
};

export default Home;