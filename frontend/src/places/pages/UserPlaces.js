import React from "react";
import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world",
        imageUrl: "https://www.esbnyc.com/sites/default/files/2020-01/ESB%20Day.jpg",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484445,
            long: -73.9882393
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Empire State Building 2",
        description: "One of the most famous sky scrapers in the world. This is the second one.",
        imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484445,
            long: -73.9882393
        },
        creator: "u2"
    }

];
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;