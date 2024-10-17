import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  //   Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import Auth from "../../utils/auth";
export default function Login() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });
//   const handleOpen = () => setOpen(!open);
  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              onChange={handleFormChange}
              name="email"
              label="Email"
              size="lg"
            />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input
              onChange={handleFormChange}
              name="password"
              label="Password"
              size="lg"
            />
            <div className="-ml-2.5 -mt-3">
              {/* <Checkbox label="Remember Me" /> */}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleFormSubmit} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              {/* //TODO ********************************* 
                make signup actually work XD*/}
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={() => console.log("TODO")}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
    </>
  );
}
