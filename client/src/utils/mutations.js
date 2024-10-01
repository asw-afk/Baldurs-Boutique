import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
  mutation addCharacter($name: String!, $gender: String) {
    addCharacter(name: $name, gender: $gender) {
      _id
      name
      gender
      author
    }
  }
`;

export const UPDATE_CHARACTER = gql`
  mutation UpdateCharacter(
    $id: ID!
    $name: String
    $gender: String
    $author: String
    $race: String
    $background: String
    $class: String
  ) {
    updateCharacter(
      _id: $id
      name: $name
      gender: $gender
      author: $author
      race: $race
      background: $background
      class: $class
    ) {
      _id
      name
      gender
      author
      race
      background
      class
    }
  }
`;
