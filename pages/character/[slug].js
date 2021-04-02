import Head from "next/head";
import Layout from "../../components/Layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import Image from "next/image";

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <div className="container mx-auto">
        <div className="xl:w-4/12 xl:h-4/12 bg-green-300 mx-auto ">
          <h1 className="font-bold text-2xl flex justify-center text-black m-5">
            {character.name}
          </h1>
          <figure className="flex justify-center">
            <Image
              src={character.image}
              alt={character.name}
              width={300}
              height={300}
            />
          </figure>
          <div className="flex justify-center p-5 font-serif">
            <ul className="font-bold">
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Earth: {character.origin.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();
  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  const data = await unfetch("https://rickandmortyapi.com/api/character/" + id);
  const character = await data.json();
  return {
    props: {
      character,
    },
  };
}

export default CharacterDetail;
