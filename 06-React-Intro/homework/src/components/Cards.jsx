import React from 'react';
import cities from '../data';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
    {cities.map(city => {
      return (<Card 
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={weather[0].icon}
        onClose = {()=> alert(city.name)}
        key={city.id}
        />
        )
    })}
    </div>
};