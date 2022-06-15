//импортируем стили
import "../../App.css";
import {useState} from "react";


import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

export const Content = () => {
    const [selector, setSelector] = useState("Characters");
    
    const handleSelectorChange = (event) => {
        setSelector(event.target.value);
      };
    

    return (<>
        <div className="content-layout">
            <select value = {selector}
                    placeholder="Choose your path" 
                    className="select-item"
                    onChange={handleSelectorChange}>    
                <option>Characters</option>
                <option>Planets</option>
                <option>Starships</option>
            </select>

            {selector === "Characters" && swCharacters.map((character)=> (
            <div className="item-list-layout">
            <div>
                <p>name: {character.name}</p>
                <p>gender: {character.gender}</p>
                <p>birthday: {character.birth_year}</p>
            </div>
            <div className="item-image-layout">
                <button className="favorite-button">I am your fan!!</button>
                <img
                className="item-image"
                src= {character.url}
                alt="asd"
                />
            </div>
            </div>
            ))}

            {selector === "Planets" && swPlanets.map((planet)=> (
            <div className="item-list-layout">
            <div>
                <p>Planet name: {planet.name}</p>
                <p>Rotation Period: {planet.rotation_period}</p>
                <p>Orbital Period: {planet.orbital_period}</p>
            </div>
            <div className="item-image-layout">
                <img
                className="item-image"
                src= {planet.url}
                alt="asd"
                />
            </div>
            </div>
            ))}

            {selector === "Starships" && swStarships.map((star)=> (
            <div className="item-list-layout">
            <div>
                <p>Star name: {star.name}</p>
                <p>Model: {star.rotation_period}</p>
                <p>Manufacturer: {star.manufacturer}</p>
            </div>
            <div className="item-image-layout">
                <img
                className="item-image"
                src= {star.url}
                alt="asd"
                />
            </div>
            </div>
            ))}


        

      </div>
    </>);
};

