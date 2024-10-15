import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import auth from "../utils/auth";
import { useEffect } from "react";

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
      race_id: 1,
      background_id: 1,
    })
    .catch((err) => console.log(err));
};
let CharacterList = [];
const getCharacters = () => {
  // TODO: Fetch characters from database
  console.log("Fetching characters...");
  // Fetch API call to get characters from database
  // TODO maybe switch to params
  axios
    .get("/api/character")
    .then((response) => {
      CharacterList = response.data;
      console.log(CharacterList);
    })
    .catch((err) => console.log(err));
};
export default function Home() {
  useEffect(() => {
    getCharacters();
    console.log("this is running");
    console.log(CharacterList);
  }, []);
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

      <div className="grid grid-cols-3 justify-items-center">
        {CharacterList.map((character) => {
          return (
            <Card key={character.id}>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {character.name}
                </Typography>
                <Typography>Race: {character.race.name}</Typography>
                <Typography>Background: {character.background.name}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Delete</Button>
              </CardFooter>
            </Card>
          );
        })}
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
