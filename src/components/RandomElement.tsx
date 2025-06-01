import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const RandomElement: React.FC = () => {
  type Element = {
    id: number;
    type: string;
    img: string;
  };

  const elements: Element[] = [
    { id: 1, type: "Fire", img: "src/img/fire.png" },
    { id: 2, type: "Water", img: "src/img/water.png" },
    { id: 3, type: "Thunder", img: "src/img/thunder.png" },
    { id: 4, type: "Grass", img: "src/img/grass.png" },
    { id: 5, type: "Psychic", img: "src/img/psychic.png" },
    { id: 6, type: "Darkness", img: "src/img/darkness.png" },
    { id: 7, type: "Metal", img: "src/img/metal.png" },
    { id: 8, type: "Colorless", img: "src/img/colorless.png" },
    { id: 9, type: "Fighting", img: "src/img/fighting.png" },
  ];

  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [started, setStarted] = useState(false);

  const getRandomObject = (arr: Element[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const setRandomElement = () => {
    setSelectedElement(null);
    setTimeout(() => setSelectedElement(getRandomObject(elements)), 1500);
  };

  const buttonClickHandler = () => {
    setStarted(true);
    setRandomElement();
  };

  useEffect(() => {
    console.log("selected: ", selectedElement);
  }, [selectedElement]);

  return (
    <>
      {selectedElement ? (
        <div className="elementContainer">
          <img src={selectedElement.img} alt="element icon" />
          <h3>{selectedElement.type}</h3>
        </div>
      ) : started ? (
        <Loading />
      ) : (
        ""
      )}
      <button onClick={buttonClickHandler}>Generate Element</button>
    </>
  );
};

export default RandomElement;
