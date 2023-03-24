import Link from "next/link";

const WizardsList = ({
  data,
}: {
  data: Array<{
    name: string;
    id: string;
  }>;
}) => {
  return (
    <div>
      <h1>Wizards</h1>
      <ul>
        {data.map((wizard) => (
          <li key={wizard.id}>
            <Link href={`/wizard/${wizard.id}`}>{wizard.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WizardsList;