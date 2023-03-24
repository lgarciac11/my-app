import HousesList from "@/components/HousesList";
import type { Houses } from '@/types';
import { HousesAPI, WizardsAPI, ElixirsAPI, HouseAPI as WizardAPI } from "@/types";
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
    const data: HousesAPI[] = await res.json();
    console.log({data})
    houses.push(
      ...data.map((house) => {
        const name = house.name;
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