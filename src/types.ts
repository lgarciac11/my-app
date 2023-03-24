export type HousesAPI = {
  count: number;
  next?: string;
  previous?: string;
  results: House[];
};
  
  export type HouseAPI = {
    id: string;
    name: string,
    houseColours: string,
    founder: string,
    animal: string,
    element: string,
    ghost: string,
    commonRoom: string,
    heads: [],
    traits: [
      {
        name: string;
      }
    ]
    url: string;
  };

  export type WizardsAPI = {
    count: number;
    next?: string;
    previous?: string;
    results: Wizard[];
  };
  
  export type WizardAPI = {
    [x: string]: any;
    elixirs: Array<{ name: string }>;
    firstName: string;
    lastName: string;
    url: string;
  };

  export type ElixirsAPI = {
    count: number;
    next?: string;
    previous?: string;
    results: Elixir[];
  };
  
  export type ElixirAPI = {
    name: string,
    effect: string,
    sideEffects: string,
    characteristics: string,
    time: string,
    difficulty: string,
    ingredients: [
      {
        name: string
      }
    ],
    inventors: [
      {
        firstName: string,
        lastName: string
      }
    ],
    manufacturer: string
    url: string
  };
  
  export type House = Omit<HouseAPI, "heads"> & {
    heads: Array<{
      name: string;
    }>;
  };
  
  export type Houses = Omit<HousesAPI, "results"> & {
    results: House[];
  };

  export type Wizard = Omit<WizardAPI, "elixirs"> & {
    elixirs: Array<{
      name: string;
    }>;
    firstName: string;
    lastName: string;
  };
  
  export type Wizards = Omit<WizardsAPI, "results"> & {
    results: Wizard[];
  };

  //El [id].tsx de elixir
  export type Elixir = Omit<ElixirAPI, "elixirs"> & {
    elixirs: Array<{
      name: string;
    }>;
  };
  
  export type Elixirs = Omit<ElixirsAPI, "results"> & {
    results: Elixir[];
  };