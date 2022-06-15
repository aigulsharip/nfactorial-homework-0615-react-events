//импортируем стили
import "../../App.css";
import {useState} from "react";
import {SwItem} from "../sw-item-ds"


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
                <SwItem key = {character.name} item = {character} type = "chars">
                    <p> gender: {character.gender}</p>
                    <p>birthday: {character.birth_year}</p>
                </SwItem>
            /*
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
            */
            ))}

            {selector === "Planets" && swPlanets.map((planet)=> (
                <SwItem key = {planet.name} item = {planet} type = "planets">
                    <p> Rotation Period: {planet.rotation_period}</p>
                    <p> Orbital Period:: {planet.orbital_period}</p>
                </SwItem>
                /*
                <div className="item-list-layout">
                    <div>
                        <p>Planet name: {planet.name}</p>
                        <p>Rotation Period: {planet.rotation_period}</p>
                        <p>Orbital Period: {planet.orbital_period}</p>
                    </div>
                    <div className="item-image-layout">
                        <img className="item-image" alt="asd" />
                    </div>
                </div>
                */
            ))}

            {selector === "Starships" && swStarships.map((star)=> (
            <SwItem key = {star.name} item = {star} type = "stars">
                <p> Star Model: {star.model}</p>
                <p> Star Manufacturer:: {star.manufacturer}</p>
            </SwItem>
        
            
            
            /*
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
            */
            ))}


        

      </div>
    </>);
};

