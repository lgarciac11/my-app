import type { GetServerSideProps, GetServerSidePropsContext } from "next";

import WizardComponent from "@/components/Wizard";
import { Wizard, WizardAPI } from "@/types";

export const getServerSideProps: GetServerSideProps<{wizard: Wizard}> = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://wizard-world-api.herokuapp.com/wizards/${id}`);
  const dataAPI: WizardAPI = await res.json();
  const wizard: Wizard = {
    ...dataAPI,
  };

  return {
    props: {
      wizard,
    },
  };
};

const WizardPage = ({ wizard }: { wizard: Wizard }) => {
  console.log({wizard: wizard || {test: "hola"}})
  return <WizardComponent data={wizard} />;
};

export default WizardPage;