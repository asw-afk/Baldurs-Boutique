import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_CHARACTER } from "../utils/queries";
import { useParams } from "react-router-dom";
import { Select, Option, Input } from "@material-tailwind/react";
import { useState } from "react";
import charClasses from "../utils/data/charClasses";
export default function Character() {
  const { characterId } = useParams();
  console.log(characterId);
  const { data, loading } = useQuery(QUERY_SINGLE_CHARACTER, {
    variables: { characterId },
  });
  const character = data ? data.character : {};
  const [formState, setFormState] = useState(character);
  const [loaded, setLoaded] = useState(false);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!loaded) {
    setFormState(character);
    setLoaded(true);
  }
  const handleFormChange = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="">
      <Input
        label="Name"
        name="name"
        onChange={handleFormChange}
        value={formState.name}
      />
      <Input label="Author" value={formState.author} disabled />
      {/* <Input label="Gender" value={formState.gender} /> */}
      <Select
        label="Class"
        onChange={() => {
          handleFormChange;
        }}
        value={formState.class}
      >
        {charClasses.map((charClass, key) => (
          <Option key={key}>{charClass.class}</Option>
        ))}
      </Select>
    </div>
  );
}
