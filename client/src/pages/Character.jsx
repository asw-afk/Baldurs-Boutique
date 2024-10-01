import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_CHARACTER } from "../utils/queries";
import { UPDATE_CHARACTER } from "../utils/mutations";
import { useParams } from "react-router-dom";
import { Select, Option, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import charClasses from "../utils/data/charClasses";
import auth from "../utils/auth";
export default function Character() {
  const { characterId } = useParams();
  const { data, loading } = useQuery(QUERY_SINGLE_CHARACTER, {
    variables: { characterId },
  });
  const [UpdateCharacter] = useMutation(UPDATE_CHARACTER);
  const character = data ? data.character : {};
  const [formState, setFormState] = useState({});
  const [selectedClass, setSelectedClass] = useState(formState.class);

  //* HANDLES SUBCLASSES
  useEffect(() => {
    setFormState(character);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    setSelectedClass(
      charClasses.find((char) => {
        return char.class == formState.class;
      })
    );
  }, [formState.class]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!auth.loggedIn()) {
    return <p>You need to be logged in to view this page.</p>;
  }
  const handleFormChange = (e) => {
    console.log(e);
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // TODO: Update character in database
    console.log(formState);
    const { _id, gender, author, race, background } = formState;
    try {
      const { data } = await UpdateCharacter({
        variables: { ...formState, id: _id },
      });
      console.log(data);
      window.location.assign("/"); //!disable when debugging
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-start-2">
        <div className="my-2">
          <Input
            label="Name"
            name="name"
            onChange={handleFormChange}
            value={formState.name}
          />
        </div>
        <div className="my-2">
          <Input label="Author" value={formState.author} disabled />
        </div>
        <div className="my-2">
          <Input
            label="Gender"
            name="gender"
            onChange={handleFormChange}
            value={formState.gender}
          />
        </div>

        <div className="my-2">
          <Select
            label="Class"
            onChange={(value) => {
              setFormState({
                ...formState,
                ["class"]: value,
              });
            }}
            value={formState.class}
          >
            {charClasses.map((charClass, key) => (
              <Option value={charClass.class} key={key}>
                {charClass.class}
              </Option>
            ))}
          </Select>
        </div>
        {selectedClass ? (
          <div className="my-2">
            <Select
              label="SubClass"
              onChange={(value) => {
                setFormState({
                  ...formState,
                  ["subClass"]: value,
                });
              }}
              value=""
            >
              {selectedClass.subclass.map((subClass, key) => (
                <Option key={key}>{subClass.name}</Option>
              ))}
            </Select>
          </div>
        ) : null}

        <button onClick={handleFormSubmit}>Update Character</button>
      </div>
    </div>
  );
}
