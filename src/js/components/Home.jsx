import React from "react";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <div>
            <div className="container mt-5">
              
                <div className="row">
          
                    <div className="col-12 col-md-3 mb-4">
                        <Card />
                    </div>
                    
                    <div className="col-12 col-md-3 mb-4">
                        <Card />
                    </div>
                   
                    <div className="col-12 col-md-3 mb-4">
                        <Card />
                    </div>
                   
                    <div className="col-12 col-md-3 mb-4">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;