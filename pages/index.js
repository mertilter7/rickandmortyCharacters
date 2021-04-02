import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

function Home({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <div className="container w-7/12 h-6/12 mx-auto bg-red-600 text-white">
        <ul className="flex flex-col text-center font-bold xl:mt-10 mt-1">
          {characters.results.map((character) => (
            <li key={character.id} className="p-1">
              <Link
                href="/character/[slug]"
                as={`/character/${slug(character.name)}-${character.id}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  // data fetch
  const data = await unfetch("https://rickandmortyapi.com/api/character");
  const characters = await data.json();
  return {
    props: {
      characters,
    },
  };
}

export default Home;
