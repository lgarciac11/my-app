import { Wizard } from "@/types";
import Link from "next/link";

const WizardComponent = ({ data }: { data: Wizard }) => (
  <div>
    <Link href="/">Back</Link>
    <p>firstName: {data.firstName}</p>
    <p>lastName: {data.lastName}</p>
    <h2>Elixirs</h2>
    <ul>
      {data.elixirs.map((elixirs) => (
        <li key={elixirs.name}></li>
      ))}
    </ul>
    
  </div>
);

export default WizardComponent;