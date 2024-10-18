import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Auth from "../utils/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { ADD_CHARACTER } from "../utils/mutations";
export default function Home() {
  const [characterList, setCharacterList] = useState([]);
  const { loading, error, data } = useQuery(GET_ME);
  const [addCharacter] = useMutation(ADD_CHARACTER);
  const userData = data ? data.me : {};

  useEffect(() => {
    if (data) {
      setCharacterList(userData.characters);
    }
  }, [data]);

  const handleAddCharacter = async (e) => {
    // TODO: Add character to database
    e.preventDefault();

    console.log("Adding character...");
    // Fetch API call to add character to database
    try {
      let response = await addCharacter({
        variables: {
          name: "Test Character",
          gender: "Male",
          raceId: 1,
          classId: 1,
          backgroundId: 1,
        },
      });
      console.log(response);
      setCharacterList([...characterList, { name: "Test Character" }]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div>List Of Your Characters</div>
        <Button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleAddCharacter}
        >
          Add Character
        </Button>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-5">
        {loading ? (
          <div>loading</div>
        ) : (
          characterList.map((character) => {
            return (
              <Card key={character.id}>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {character.name}
                  </Typography>
                  <Typography>Gender: {character.gender}</Typography>
                  {/* <Typography>Race: {character.race.name}</Typography> */}
                  {/* <Typography>Class: {character.class.name}</Typography> */}
                  {/* <Typography>Background: {character.background.name}</Typography> */}
                </CardBody>
                <CardFooter className="pt-0">
                  <Link to={`/character/${character.id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button>Delete</Button>
                </CardFooter>
              </Card>
            );
          })
        )}
      </div>
    </>
  );
}
