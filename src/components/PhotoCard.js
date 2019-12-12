import React from "react";

const PhotoCard = props => {
    return (
        <div className="photo-list" key={props.id}>
            <p>Date: {props.date}</p>
            <h2>{props.title}</h2>
            <div className="image">
                <img src={props.image} alt="space shot of the day"></img>
            </div>
            <div className="bottom">
                <h3>Explanation:</h3>
                    <p>{props.explanation}</p>
                <a href={props.link}>Click here to view!</a>
            </div>
        </div>
    );
};

export default PhotoCard;