import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CharacterCard(prop) {
  console.log(prop.character);
  const { name, background, gender, race } = prop.character;
  const charClass = prop.character.class;
  //   const {} = prop;
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>Race: {race}</Typography>
        <Typography>Gender: {`${gender}`}</Typography>
        <Typography>background: {background}</Typography>
        <Typography>Race: {race}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
