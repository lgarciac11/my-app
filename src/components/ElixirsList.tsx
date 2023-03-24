import Link from "next/link";

const ElixirsList = ({
  data,
}: {
  data: Array<{
    name: string;
    id: string;
  }>;
}) => {
  return (
    <div>
      <h1>Elixirs</h1>
      <ul>
        {data.map((elixir) => (
          <li key={elixir.id}>
            <Link href={`/elixir/${elixir.id}`}>{elixir.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElixirsList;