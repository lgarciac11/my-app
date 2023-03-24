import HousesList from "@/components/HousesList";
import WizardsList from "@/components/WizardsList";
import ElixirsList from "@/components/ElixirsList";
import { HousesAPI, WizardsAPI, ElixirsAPI, HouseAPI as WizardAPI } from "@/types";
import { GetServerSideProps } from "next";

//Houses
export const getServerSideProps: GetServerSideProps<{wizards: Array<{
  name: string;
  id: string;
}>}> = async () => {
  const wizards: Array<{
    name: string;
    id: string;
  }> = [];

  try {
    const res = await fetch("https://wizard-world-api.herokuapp.com/wizards");
    const data: WizardAPI[] = await res.json();
    console.log({data})
    wizards.push(
      ...data.map((wizard) => {
        const name = wizard.firstName + " " + wizard.lastName;
        // get id from url
        const id = wizard.id;
        return { name, id };
      })
    );

    return {
      props : {
        wizards
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      wizards: [],
    },
  };
};

type WizardsProps = {
  wizards: Array<{
  name: string;
  id: string;
}>;
};

export default function Home(props: WizardsProps) {
console.log({props});
return <WizardsList data={props.wizards} />;
}

// //Wizards
// export const getServerSidePropsW = async () => {
//   const props: Array<{
//     name: string;
//     id: string;
//   }> = [];
//   try {
//     const res = await fetch("https://swapi.dev/api/wizards");
//     const data: WizardsAPI = await res.json();
//     props.push(
//       ...data.results.map((wizard) => {
//         const name = wizard.firstName;
//         // get id from url
//         const id = wizard.url.split("/").slice(-2)[0];
//         return { name, id };
//       })
//     );

//     let next = data.next;
//     while (next) {
//       console.log(next);
//       const res = await fetch(next);
//       const data: WizardsAPI = await res.json();
//       props.push(
//         ...data.results.map((wizard) => {
//           const name = wizard.firstName;
//           // get id from url
//           const id = wizard.url.split("/").slice(-2)[0];
//           return { name, id };
//         })
//       );
//       next = data.next;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       data: props,
//     },
//   };
// };

// //Elixirs
// export const getServerSidePropsE = async () => {
//   const props: Array<{
//     name: string;
//     id: string;
//   }> = [];
//   try {
//     const res = await fetch("https://swapi.dev/api/elixirs");
//     const data: ElixirsAPI = await res.json();
//     props.push(
//       ...data.results.map((elixir) => {
//         const name = elixir.name;
//         // get id from url
//         const id = elixir.url.split("/").slice(-2)[0];
//         return { name, id };
//       })
//     );

//     let next = data.next;
//     while (next) {
//       console.log(next);
//       const res = await fetch(next);
//       const data: ElixirsAPI = await res.json();
//       props.push(
//         ...data.results.map((elixir) => {
//           const name = elixir.name;
//           // get id from url
//           const id = elixir.url.split("/").slice(-2)[0];
//           return { name, id };
//         })
//       );
//       next = data.next;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       data: props,
//     },
//   };
// };








/*import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}*/