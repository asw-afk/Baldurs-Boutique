import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import auth from "../utils/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    getCharacters();
  }, []);
  const getCharacters = () => {
    // TODO: Fetch characters from database
    console.log("Fetching characters...");
    // Fetch API call to get characters from database
    // TODO maybe switch to params
    axios
      .get("/api/character")
      .then((response) => {
        setCharacterList(response.data);
      })
      .catch((err) => console.log(err));
  };
  const addCharacter = (e) => {
    // TODO: Add character to database
    e.preventDefault();

    console.log("Adding character...");
    // Fetch API call to add character to database
    //TODO maybe switch to params
    let profile = auth.getProfile().data;
    axios
      .post("/api/character", {
        // Add character data here
        name: profile.username,
        gender: "null",
        user_id: profile.id,
        class_id: 1,
        race_id: 1,
        background_id: 1,
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex justify-center">
        <div>List Of Your Characters</div>
        <Button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={addCharacter}
        >
          Add Character
        </Button>
      </div>

      <div className="grid grid-cols-3 justify-items-center gap-5">
        {characterList.map((character) => {
          return (
            <Card key={character.id}>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {character.name}
                </Typography>
                <Typography>Gender: {character.gender}</Typography>
                <Typography>Race: {character.race.name}</Typography>
                <Typography>Class: {character.class.name}</Typography>
                <Typography>Background: {character.background.name}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/character/${character.id}`}>
                  <Button>Edit</Button>
                </Link>
                <Button>Delete</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
