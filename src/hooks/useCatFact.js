import { useEffect, useState } from "react";
import { getRandomFact } from "../utils/utils";

const useCatFact = () => {
  const [fact, setFact] = useState();

  useEffect(() => {
    getRandomFact().then(fact => setFact(fact))
  }, [])

  return fact;
}

export default useCatFact;