import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container px-lg-5" style={{ marginTop: "80px" }}>
                <Jumbotron />
                <div className="row text-center gx-lg-5">
                    <div className="col-lg-3 col-md-6 mb-4"><Card /></div>
                    <div className="col-lg-3 col-md-6 mb-4"><Card /></div>
                    <div className="col-lg-3 col-md-6 mb-4"><Card /></div>
                    <div className="col-lg-3 col-md-6 mb-4"><Card /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
