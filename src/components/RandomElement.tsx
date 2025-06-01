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
    { id: 1, type: "Fire", img: "fire.png" },
    { id: 2, type: "Water", img: "water.png" },
    { id: 3, type: "Thunder", img: "thunder.png" },
    { id: 4, type: "Grass", img: "grass.png" },
    { id: 5, type: "Psychic", img: "psychic.png" },
    { id: 6, type: "Darkness", img: "darkness.png" },
    { id: 7, type: "Metal", img: "metal.png" },
    { id: 8, type: "Colorless", img: "colorless.png" },
    { id: 9, type: "Fighting", img: "fighting.png" },
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
