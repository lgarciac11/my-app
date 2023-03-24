import HousesList from "@/components/HousesList";
import WizardsList from "@/components/WizardsList";
import ElixirsList from "@/components/ElixirsList";
import { HousesAPI, WizardsAPI, ElixirsAPI, HouseAPI, WizardAPI } from "@/types";
import { GetServerSideProps } from "next";

//Houses
export const getServerSideProps: GetServerSideProps<{houses: Array<{
  name: string;
  id: string;
}>}> = async () => {
  const houses: Array<{
    name: string;
    id: string;
  }> = [];

  try {
    const res = await fetch("https://wizard-world-api.herokuapp.com/houses");
    const data: WizardAPI[] = await res.json();
    console.log({data})
    houses.push(
      ...data.map((house) => {
        const name = house.firstName + " " + house.lastName;
        // get id from url
        const id = house.id;
        return { name, id };
      })
    );

    return {
      props : {
        houses
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
        houses: [],
    },
  };
};
type HousesProps = {
    houses: Array<{
    name: string;
    id: string;
  }>;
};

export default function Home(props: HousesProps) {
  console.log({props});
  return <HousesList data={props.houses} />;
}