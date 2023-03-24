import { Elixir } from "@/types";
import Link from "next/link";

const ElixirComponent = ({ data }: { data: Elixir }) => (
  <div>
    <Link href="/">Back</Link>
    <h1>{data.name}</h1>
    <p>Effect: {data.effect}</p>
    <p>SideEffects: {data.sideEffects}</p>
    <p>Characteristics: {data.characteristics}</p>
    <p>Time: {data.time}</p>
    <p>Difficulty: {data.difficulty}</p>
    <h2>Ingredients</h2>
    <ul>
      {data.ingredients.map((ingredients) => (
        <li key={ingredients.name}></li>
      ))}
    </ul>
    <h2>Inventors</h2>
    <ul>
      {data.inventors.map((inventors) => (
        <li key={inventors.firstName}>{inventors.lastName}</li>
      ))}
    </ul>
    <p>Manufacturer: {data.manufacturer}</p>
  </div>
);

export default ElixirComponent;