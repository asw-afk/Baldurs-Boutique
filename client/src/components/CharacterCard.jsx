import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function CharacterCard(prop) {
  const { _id, name, background, gender, race, attributes } = prop.character;
  const charClass = prop.character.class;
  return (
    <Link to={`character/${_id}`}>
      <Card className="mt-6 w-96" color="blue-gray">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>Race: {race}</Typography>
          <Typography>Gender: {`${gender}`}</Typography>
          <Typography>background: {background}</Typography>
          <Typography>Race: {race}</Typography>
          <Typography>Class: {charClass}</Typography>
          <Typography>attributes: </Typography>
          <Typography>
            Str:{attributes.Strength} Dex:{attributes.Dexterity} Int:
            {attributes.Intelligence} Wis:{attributes.Wisdom} Cha:
            {attributes.Charisma}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0"></CardFooter>
      </Card>
    </Link>
  );
}
