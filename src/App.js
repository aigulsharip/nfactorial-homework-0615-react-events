import {useState} from "react";
import { DefaultContext } from "./Context";


//импортируем стили
import "./App.css";


//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "./assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "./assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "./assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "./assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "./assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "./assets/youtube.svg";

import swCharacters from "./data/characters.json";
import swPlanets from "./data/planets.json";
import swStarships from "./data/starships.json";

import { Header } from "./components/header";
import { Content } from "./components/content";



export default function App() {
const [fan, setFan] = useState("");

const handleCreateFan = ({name}) => {
  setFan(name);
}

  return (
    <DefaultContext.Provider value = {{handleCreateFan}}>
      <Header fan = {fan}/>
      <hr />
      <Content/>

    </DefaultContext.Provider>
  );
}
