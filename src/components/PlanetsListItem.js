import { useEffect, useState } from "react";
/*
- In `PlanetsListItem.js`, implement a `useEffect` hook that runs when the `planet` prop changes. The effect should make a `fetch` request to the *first* film url in the `films` property on the planet object. The `firstFilm` state should be set to the `title` of the film returned from the request.
*/
function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState("");

  console.log("Planet", planet);
  useEffect(() => {
    fetch(planet.films[0])
      .then((res) => res.json())
      .then((json) => setFirstFilm(json.title));
  }, [planet]);
  return (
    <li>
      {planet.name} - First Film {firstFilm}
    </li>
  );
}

export default PlanetsListItem;
