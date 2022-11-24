import React from "react";
import hero from '../images/hero.jpg';

function Hero () {
    return (
        <section className="hero">
            <img src={hero} alt="main_image" className="main-img" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interractive led by
                 one-of-a-kind hosts-all without leaving home . </p>
        </section>
    )
}

export default Hero ;