import { Button } from "@material-tailwind/react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_CHARACTER } from "../utils/mutations";
import { CharacterCard } from "../components/CharacterCard";
export default function Home() {
  const { data, loading } = useQuery(QUERY_ME);
  const [addCharacter] = useMutation(ADD_CHARACTER);
  const { me } = data ? data : [];
  if (!me) {
    return <p>You need to be logged in to view this page.</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const createCharacter = async () => {
    // const name = prompt("Enter character name");
    const name = "Bobart";
    await addCharacter({ variables: { name } });
    //TODO Reset page on create or update state with respoinse
  };
  console.log(me.characters);
  return (
    <>
      <body className="grid justify-items-center">
        <div className="">
          <h1>Welcome, {me.username}!</h1>
          <p>You are logged in as a {me.role} user.</p>
          <Button onClick={createCharacter}>New Character</Button>
          <p>You have {me.characters.length} created characters</p>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-3">
          {me.characters.map((character, key) => {
            return <CharacterCard character={character} key={key} />;
          })}
        </div>
      </body>
    </>
  );
}
