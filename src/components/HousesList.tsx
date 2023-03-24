import Link from "next/link";

const HousesList = ({
  data,
}: {
  data: Array<{
    name: string;
    id: string;
  }>;
}) => {
  return (
    <div>
      <h1>Houses</h1>
      <ul>
        {data.map((house) => (
          <li key={house.id}>
            <Link href={`/house/${house.id}`}>{house.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HousesList;