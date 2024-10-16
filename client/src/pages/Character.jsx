import axios from "axios";
import { useParams } from "react-router-dom";
import auth from "../utils/auth";
import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
export default function Character() {
  const { id } = useParams();
  useEffect(() => {
    getCharacter();
  }, []);
  const [character, setCharacter] = useState({
    name: "",
    gender: "",
    race: { name: "" },
    subrace: { name: "" },
    class: { name: "" },
    background: { name: "" },
  });
  const getCharacter = () => {
    axios
      .get(`/api/character/${id}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setCharacter(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-start-2">
          <Input label="Name" defaultValue={character.name}></Input>
          <Input label="Gender" defaultValue={character.gender}></Input>
          <Input label="Race" defaultValue={character.race.name}></Input>
          <Input label="Subrace" defaultValue={character.subrace.name}></Input>
          <Input label="Class" defaultValue={character.class.name}></Input>
          <Input
            label="Background"
            defaultValue={character.background.name}
          ></Input>
        </div>
      </div>
    </>
  );
}
