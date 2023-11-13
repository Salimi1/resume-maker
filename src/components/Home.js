//Components
import Navbar from "./Navbar";
import Header from ".//Header";
import Vorlagen from ".//Vorlagen";
import Vorteilen from ".//Vorteilen";
import Footer from ".//Footer";
import Bewertungen from ".//Bewertungen";

import React from 'react';

const Home = () => {
    return (
        <div style={{backgroundImage: 'url(https://imagizer.imageshack.com/img924/9695/Czr9ke.png)'}}>
            <Navbar />
            <Header />
            <Vorlagen />
            <Vorteilen />
            <Bewertungen />
            <Footer />
        </div>
    );
};

export default Home;