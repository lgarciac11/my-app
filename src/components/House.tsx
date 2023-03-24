import { House } from "@/types";
import Link from "next/link";

const HouseComponent = ({ data }: { data: House }) => (
  <div>
    <Link href="/">Back</Link>
    <h1>{data.name}</h1>
    <p>House colours: {data.houseColours}</p>
    <p>Founder: {data.founder}</p>
    <p>Animal: {data.animal}</p>
    <p>Element: {data.element}</p>
    <p>Ghost: {data.ghost}</p>
    <p>CommonRoom: {data.commonRoom}</p>
    <h2>Heads</h2>
    <ul>
      {data.heads.map((heads) => (
        <li key={heads.id}>
          {`${heads.firstName} ${heads.lastName}`}
        </li>
      ))}
    </ul>
    <h2>Traits</h2>
    <ul>
      {data.traits.map((traits) => (
        <li key={traits.id}>{traits.name}</li>
      ))}
    </ul>
  </div>
);

export default HouseComponent;
