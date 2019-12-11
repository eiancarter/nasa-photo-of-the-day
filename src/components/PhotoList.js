import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=pKxTv7ueogOErUW2WkCXGUc0IjbIr5Y2eEt2hcXF")
            .then(response => {
                console.log(response);
                setPhotos(response.data);
            })
            .catch (error => {
                console.log("no NASA data available", error);
            })
    }, []);

    return (
        <div className="photo">
            <PhotoCard key ={photos.id} date={photos.date} title={photos.title} image={photos.hdurl} explanation={photos.explanation} link={photos.url}/>
            {/* {photos.map(photo => {
                return (
                    <PhotoCard key={photo.id} date={photo.date} title={photo.title} explanation={photo.explanation} link={photo.url} />
                );
            })} */}
        </div>
    )
}




//Here's what I need to display:
//date, explanation, url, title