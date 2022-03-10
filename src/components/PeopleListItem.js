import { useEffect, useState } from "react";
/*
## Instructions
- In `PeopleListItem.js`, implement a `useEffect` hook that runs when the `person` prop changes. The effect should make a `fetch` request to the `homeworld` url property on the person object. The `homeworld` state should be set to the name of the planet returned from the request.
*/

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState("");

  console.log("person", person);
  useEffect(() => {
    fetch(person.homeworld)
      .then((res) => res.json())

      .then((json) => {
        console.log("homeworls", json);
        setHomeworld(json.name);
      });
  }, [person]);
  return (
    <ul>
      <li>
        {person.name} - Homeworld: {homeworld}
      </li>
    </ul>
  );
}

export default PeopleListItem;
