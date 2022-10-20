import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return <div>
    <button onClick={onClose}>X</button>
    <h3>{name}</h3>
    <div>
      <h5>Mínimo</h5>
      <p>{min}</p>
    </div>
    <div>
      <h5>Máximo</h5>
      <p>{max}</p>
    </div>
    <img src={"http://openweathermap.org/img/wn/${img}@2x.png"} alt="icon"/>
      

    
  </div>
};