import React from "react";
import "../assets/styles.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Buy from "../components/Buy";
import Swapper from "../components/Swapper";
import Staking from "../components/Staking";
import Chart from "../components/Chart";
import Faq from "../components/Faq";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <Tokenomics />
            <Chart />
            <Roadmap />
            <Buy />
            <Swapper />
            <Staking />
            <Faq />
            <Socials />
            <Footer />
        </div>
    )
};

export default Home;

// <Roadmap />
// <Faq />
