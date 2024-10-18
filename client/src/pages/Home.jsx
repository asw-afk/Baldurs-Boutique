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
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../utils/mutations";
export default function Home() {
  const [characterList, setCharacterList] = useState([]);
  const { loading, error, data } = useQuery(GET_ME);
  const [addCharacter] = useMutation(ADD_CHARACTER);
  const [removeCharacter] = useMutation(REMOVE_CHARACTER);
  const userData = data ? data.me : {};
  console.log(userData);
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
    let defaultCharacter = {
      name: "Test Character",
      gender: "Male",
      raceId: 1,
      classId: 1,
      backgroundId: 1,
    };

    try {
      let { data } = await addCharacter({
        variables: defaultCharacter,
      });
      console.log(data);
      setCharacterList([...characterList, data.addCharacter]);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveCharacter = async (e) => {
    // TODO: Remove character from database
    e.preventDefault();
    const id = e.target.value;
    await removeCharacter({ variables: { id: +id } });
    let indexToDelete = characterList
      .map(({ id }) => id)
      .indexOf(e.target.value);
    setCharacterList(
      characterList.filter((item, index) => index !== indexToDelete)
    );
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
                  <Button onClick={handleRemoveCharacter} value={character.id}>
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            );
          })
        )}
      </div>
    </>
  );
}
