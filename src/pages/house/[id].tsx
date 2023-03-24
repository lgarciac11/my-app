import type { GetServerSideProps, GetServerSidePropsContext } from "next";

import HouseComponent from "@/components/House";
import { House, HouseAPI } from "@/types";

export const getServerSideProps: GetServerSideProps<{house: House}> = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://wizard-world-api.herokuapp.com/houses/${id}`);
  const dataAPI: HouseAPI = await res.json();
  const house: House = {
    ...dataAPI,
  };

  return {
    props: {
      house,
    },
  };
};

const HousePage = ({ house }: { house: House }) => {
  return <HouseComponent data={house} />;
};

export default HousePage;