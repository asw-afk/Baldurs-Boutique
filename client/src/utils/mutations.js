import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation AddCharacter(
    $name: String!
    $gender: String!
    $backgroundId: Int!
    $raceId: Int!
    $classId: Int!
  ) {
    addCharacter(
      name: $name
      gender: $gender
      background_id: $backgroundId
      race_id: $raceId
      class_id: $classId
    ) {
      id
      user_id
      name
      gender
      race {
        id
        name
      }
      subrace {
        id
        name
      }
      class {
        id
        name
      }
      background {
        id
        name
      }
    }
  }
`;

export const REMOVE_CHARACTER = gql`
  mutation removeCharacter($id: Int!) {
    removeCharacter(id: $id) {
      id
      name
      user_id
    }
  }
`;
