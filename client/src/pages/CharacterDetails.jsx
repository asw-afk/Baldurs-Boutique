import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_CHARACTER } from "../utils/queries";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_CHARACTER, {
    variables: { characterId: id },
  });
  const characterData = data ? data.character : {};
  console.log(characterData);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const { background, gender, race, subrace } = characterData;
  return (
    <>
      <div>background: {background.name}</div>
      <div>gender: {gender}</div>
      <div>race: {race.name}</div>
      <div>subrace: {subrace.name}</div>
      <div>character name: {characterData.name}</div>
      <div>character id: {characterData.id}</div>
      <div>character user id: {characterData.user_id}</div>
    </>
  );
}
