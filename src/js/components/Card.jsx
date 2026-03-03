import React from "react";

const Card = () => {
    return (
<div className = "card text-center h-100">
    <img src = "https://placehold.co/500x325" className = "card-img-top" alt = "Card Placeholder" />
    <div className = "card-body">
        <h5 className = "card-title">Card Title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis natus voluptatum laboriosam quia assumenda vero suscipit, ratione, optio et hic repudiandae quaerat. Aperiam itaque est esse consequuntur. Reprehenderit, asperiores.</p>
        </div>
        <div className="card-footer bg-white top-1 py-3">
            <a href = "#" className = "btn btn-primary">Find Out More!</a>
        </div>
</div> 
    );
}

export default Card;