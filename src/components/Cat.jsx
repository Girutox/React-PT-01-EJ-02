import { useEffect, useState } from "react";
import useCatFact from "../hooks/useCatFact";
import { getRandomFact } from "../utils/utils";

const CAT_IMAGE_BASE_URL = 'https://cataas.com';
const CAT_IMAGE_URL = 'https://cataas.com/cat/says/';

const Cat = () => {
  const fact = useCatFact();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const memeText = fact.split(' ', 3).join(' ');

    fetch(`${CAT_IMAGE_URL}${memeText}?json=true`)
      .then(response => response.json())
      .then(data => setImageUrl(data.url))
  }, [fact]);

  const refreshHandler = () => {
    // getRandomFact().then(fact => setFact(fact))
  }

  return <main>
    <h1>Prueba técnica 01</h1>
    <p>🐈 {fact}</p>
    <button onClick={refreshHandler}>Actualizar</button>
    <hr />
    {
      imageUrl &&
      <img src={`${CAT_IMAGE_BASE_URL}${imageUrl}`} alt="Meme de gato en base a un hecho aleatorio" />
    }
  </main>
}

export default Cat;