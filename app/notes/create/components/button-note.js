"use client";

import { useState } from 'react';

export default function Button({ onClick }) {
  const [noteIdCreated, setNoteIdCreated] = useState();
  
  return (
    <div>
      <marquee>Crea una nueva super nota, animate!</marquee>
      <button
        onClick={() => {
          onClick().then(result => setNoteIdCreated(result.id));
        }}
      >
        Create Empty Note
      </button>
      <p>{noteIdCreated ? `Nota N° ${noteIdCreated} creada!` : ''}</p>
    </div>
  );
}
