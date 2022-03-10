import { useEffect, useState } from "react";
/*
- In `StarshipsList.js`, implement a `useEffect` hook that runs when the `starship` prop changes. The effect should make a `fetch` request to the *first* pilot url in the `pilots` property on the starship object. The `firstPilot` state should be set to the `name` of the pilot returned from the request. If there are *no* pilots for that ship, "no pilots" should be displayed.
*/
function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState("");

  console.log({ starship });

  useEffect(() => {
    if (starship.pilots.length === 0) {
      return setFirstPilot("no Pilot");
    }
    fetch(starship.pilots[0])
      .then((res) => res.json())
      .then((json) => setFirstPilot(json.name));
  }, [starship]);
  return (
    <li>
      {starship.name} - First Pilot {firstPilot}
    </li>
  );
}

export default StarshipsListItem;
